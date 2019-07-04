const nock = require('nock')

const Blocks = require('./blocks')
const Delegates = require('./delegates')
const Node = require('./node')
const Peers = require('./peers')
const Transactions = require('./transactions')
const Votes = require('./votes')
const Wallets = require('./wallets')
const Webhooks = require('./webhooks')

module.exports = config => {
  const { host } = config

  Blocks(nock, host)
  Delegates(nock, host)
  Node(nock, host)
  Peers(nock, host)
  Transactions(nock, host)
  Votes(nock, host)
  Wallets(nock, host)
  Webhooks(nock, host)

  return nock
}
