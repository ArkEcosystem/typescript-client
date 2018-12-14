const Client = require('../../lib')
const ApiResource = require('../../lib/resources/api/wallets')

const expectBodyAndParams = require('../__utils__/expect-body-and-params')

const configureMocks = require('../mocks')
const host = 'https://example.net:4003'
const mock = configureMocks({ host })

let resource

beforeEach(() => {
  resource = (new Client(host)).setVersion(2).wallets
})

describe('API - 2.0 - Resources - Wallets', () => {
  it('should be instantiated', () => {
    expect(resource).toBeInstanceOf(ApiResource)
  })

  it('should call "all" method', async () => {
    const response = await resource.all()

    expect(response.status).toBe(200)
  })

  it('should call "top" method', async () => {
    const response = await resource.top()

    expect(response.status).toBe(200)
  })

  it('should call "get" method', async () => {
    const response = await resource.get('123')

    expect(response.status).toBe(200)
  })

  it('should call "transactions" method', async () => {
    const response = await resource.transactions('123')

    expect(response.status).toBe(200)
  })

  it('should call "transactionsSent" method', async () => {
    const response = await resource.transactionsSent('123')

    expect(response.status).toBe(200)
  })

  it('should call "transactionsReceived" method', async () => {
    const response = await resource.transactionsReceived('123')

    expect(response.status).toBe(200)
  })

  it('should call "votes" method', async () => {
    const response = await resource.votes('123')

    expect(response.status).toBe(200)
  })

  describe('search', () => {
    it('should admit no parameters', async () => {
      const response = await resource.search()

      expect(response.status).toBe(200)
    })

    it('should admit sending data on the request body', async () => {
      const data = { example: 'example' }

      mock.onPost(`${host}/api/wallets/search`, data).reply(200, { data: [] })

      const response = await resource.search(data)

      expect(response.status).toBe(200)
    })

    it('should admit sending data on the request body and querystring parameters', async () => {
      const data = { example: 'example' }
      const params = { page: 1 }

      expectBodyAndParams(mock.onPost(`${host}/api/wallets/search`), { params, data })

      const response = await resource.search(data, params)

      expect(response.status).toBe(200)
    })
  })
})
