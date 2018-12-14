const Client = require('../../lib')
const ApiResource = require('../../lib/resources/api/transactions')

const expectBodyAndParams = require('../__utils__/expect-body-and-params')

const configureMocks = require('../mocks')
const host = 'https://example.net:4003'
const mock = configureMocks({ host })

let resource

beforeEach(() => {
  resource = (new Client(host)).setVersion(2).transactions
})

describe('API - 2.0 - Resources - Transactions', () => {
  it('should be instantiated', () => {
    expect(resource).toBeInstanceOf(ApiResource)
  })

  it('should call "all" method', async () => {
    const response = await resource.all()

    expect(response.status).toBe(200)
  })

  it('should call "create" method', async () => {
    const response = await resource.create()

    expect(response.status).toBe(200)
  })

  it('should call "get" method', async () => {
    const response = await resource.get('123')

    expect(response.status).toBe(200)
  })

  it('should call "allUnconfirmed" method', async () => {
    const response = await resource.allUnconfirmed()

    expect(response.status).toBe(200)
  })

  it('should call "getUnconfirmed" method', async () => {
    const response = await resource.getUnconfirmed('123')

    expect(response.status).toBe(200)
  })

  describe('search', () => {
    it('should admit no parameters', async () => {
      const response = await resource.search()

      expect(response.status).toBe(200)
    })

    it('should admit sending data on the request body', async () => {
      const data = { example: 'example' }

      mock.onPost(`${host}/api/transactions/search`, data).reply(200, { data: [] })

      const response = await resource.search(data)

      expect(response.status).toBe(200)
    })

    it('should admit sending data on the request body and querystring parameters', async () => {
      const data = { example: 'example' }
      const params = { page: 1 }

      expectBodyAndParams(mock.onPost(`${host}/api/transactions/search`), { params, data })

      const response = await resource.search(data, params)

      expect(response.status).toBe(200)
    })
  })

  it('should call "types" method', async () => {
    const response = await resource.types()

    expect(response.status).toBe(200)
  })
})
