const nock = require('nock')

const Accounts = require('./accounts')
const Blocks = require('./blocks')
const Delegates = require('./delegates')
const Loader = require('./loader')
const Peers = require('./peers')
const Signatures = require('./signatures')
const Transactions = require('./transactions')

module.exports = config => {
  const { host } = config

  Accounts(nock, host)
  Blocks(nock, host)
  Delegates(nock, host)
  Loader(nock, host)
  Peers(nock, host)
  Signatures(nock, host)
  Transactions(nock, host)

  return nock
}
