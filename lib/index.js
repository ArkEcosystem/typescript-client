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

module.exports = class ApiClient {
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
