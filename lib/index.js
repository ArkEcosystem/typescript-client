const shuffle = require('lodash.shuffle')
const HttpClient = require('./http')
const {
  Peers,
  Blocks,
  Delegates,
  Node,
  Transactions,
  Votes,
  Wallets,
  Webhooks
} = require('./resources/api')
const initialPeers = require('./peers')
const sortPeers = require('./utils/sort-peers')

const mergePeerArrays = (oldArray, newArray) => {
  const peers = []
  for (const oldPeer of oldArray) {
    const newPeer = newArray.find(peer => (peer.ip === oldPeer.ip)) || {}
    peers.push({ ...oldPeer, ...newPeer })
  }
  for (const newPeer of newArray) {
    if (!peers.find(peer => (peer.ip === newPeer.ip))) {
      peers.push(newPeer)
    }
  }

  return peers
}

module.exports = class ApiClient {
  /**
   * Finds all the available peers, sorted by block height and delay
   * @param {String}    network - Network name ('devnet' or 'mainnet')
   * @param {Number}    [version=2] - API version
   * @param {Object[]}  [peersOverride] - List of peers to use instead of initialPeers
   * @return {Object[]}
   */
  static async findPeers (network, version = 2, peersOverride) {
    if (peersOverride === undefined && !initialPeers.hasOwnProperty(network)) {
      throw new Error(`Network "${network}" is not supported`)
    }

    const networkPeers = peersOverride || initialPeers[network]

    // Shuffle the peers to avoid connecting always to the first ones
    shuffle(networkPeers)
    const selfIps = ['127.0.0.1', '::ffff:127.0.0.1', '::1']
    const versionStatus = 200

    // Connect to each peer to get an updated list of peers until a success response
    const client = new ApiClient('http://', version)
    client.http.setTimeout(5000)

    let checks = 0
    let peers = []
    for (const peer of networkPeers) {
      const peerUrl = `http://${peer.ip}:${peer.port}`

      // This method should not crash when a peer fails
      try {
        client.http.host = peerUrl
        // On V2, this endpoint returns the port used by `core-p2p``
        const { data } = await client.peers.all()

        let responsePeers = []
        if (version === 2 && data.data.length) {
          responsePeers = data.data
        }

        if (responsePeers.length) {
          // Ignore local and unavailable peers
          responsePeers = responsePeers.filter(peer => {
            return selfIps.indexOf(peer.ip) === -1 && peer.status === versionStatus
          })

          peers = mergePeerArrays(peers, responsePeers)

          checks++
          if (checks >= 2) {
            break
          }
        }
      } catch (error) {
        // TODO only if a new feature to enable logging is added
        // console.log(`Cannot find find peers of \`${peerUrl}\``)
      }
    }

    // Return at least the initial (hardcoded) peers
    return sortPeers(peers && peers.length ? peers : networkPeers)
  }

  /**
   * Only for V2
   * Get the configuration of a peer
   * @param {String} host - URL of the host (using `core-p2p` port)
   * @return {(Object|null)}
   */
  static async fetchPeerConfig (host) {
    const httpClient = new HttpClient(host, 2)

    try {
      const { data } = await httpClient.sendRequest('get', '/config')
      if (data) {
        return data.data
      }
    } catch (error) {
      // TODO only if a new feature to enable logging is added
      // console.log(`Error on \`${host}\``)
    }

    return null
  }

  /**
   * Only for V2
   * Check each peer until finding one that has `core-api` enabled and return it,
   * but with the port that is configured to `core-api`
   * @param {Object[]} peers - List of peers to check
   * @return {(Object|null)}
   */
  static async selectApiPeer (peers) {
    for (const peer of peers) {
      const host = `http://${peer.ip}:${peer.port}`
      const config = await ApiClient.fetchPeerConfig(host)

      if (config && config.plugins && config.plugins['@arkecosystem/core-api'] &&
      config.plugins['@arkecosystem/core-api'].enabled) {
        return {
          ...peer,
          port: config.plugins['@arkecosystem/core-api'].port
        }
      }
    }

    return null
  }

  /**
   * Connects to a random peer of the network that supports `core-api`
   * @param {String} network - Network name
   * @param {Number} version - API version
   * @param {Object[]} peersOverride - List of peers to use instead of initialPeers
   * @return {ApiClient}
   */
  static async connect (network, version, peersOverride) {
    const peers = await ApiClient.findPeers(network, version, peersOverride)
    let peer = await ApiClient.selectApiPeer(peers)
    if (!peer) {
      throw new Error('No peer with `core-api` enabled has been found')
    }

    return new ApiClient(`http://${peer.ip}:${peer.port}`, version)
  }

  /**
   * @constructor
   * @param {String} host
   * @param {Number} version - API version
   * @return {void}
   */
  constructor (host, version) {
    this.setConnection(host)
    this.setVersion(version || 2)
    this.setProperties()
  }

  /**
   * Create a HTTP connection to the API.
   * @param {String} host
   * @return {void}
   */
  setConnection (host) {
    this.http = new HttpClient(host, this.version)
  }

  /**
   * Get the HTTP connection to the API.
   * @return {(HttpClient|undefined)}
   */
  getConnection () {
    return this.http
  }

  /**
   * Set the API Version.
   * @param {Number}     version
   * @return {ApiClient}
   */
  setVersion (version) {
    if (!version) {
      throw new Error('A valid API version is required')
    }

    this.version = version
    this.http.setVersion(version)

    return this
  }

  setProperties () {
    this.peers = new Peers(this.http)
    this.blocks = new Blocks(this.http)
    this.delegates = new Delegates(this.http)
    this.node = new Node(this.http)
    this.transactions = new Transactions(this.http)
    this.votes = new Votes(this.http)
    this.wallets = new Wallets(this.http)
    this.webhooks = new Webhooks(this.http)
  }
}
