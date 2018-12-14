const Client = require('../../lib')
const ApiResource = require('../../lib/resources/api/transactions')

const configureMocks = require('../mocks')
const host = 'https://example.net:4003'
configureMocks({ host })

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

  it('should call "search" method', async () => {
    const response = await resource.search({})

    expect(response.status).toBe(200)
  })

  it('should call "types" method', async () => {
    const response = await resource.types()

    expect(response.status).toBe(200)
  })
})
