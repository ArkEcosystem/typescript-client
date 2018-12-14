const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

const blocks = require('./blocks')
const delegates = require('./delegates')
const node = require('./node')
const peers = require('./peers')
const transactions = require('./transactions')
const votes = require('./votes')
const wallets = require('./wallets')
const webhooks = require('./webhooks')

module.exports = config => {
  const mock = new MockAdapter(axios)
  const { host } = config

  blocks(mock, host)
  delegates(mock, host)
  node(mock, host)
  peers(mock, host)
  transactions(mock, host)
  votes(mock, host)
  wallets(mock, host)
  webhooks(mock, host)

  return mock
}
