const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const httpMock = new MockAdapter(axios)

const Client = require('../lib')
const HttpClient = require('../lib/http')
const ApiResource = require('../lib/resources/api/transactions')

const host = 'https://example.net:4003'

let client

beforeEach(() => {
  httpMock.reset()
  client = (new Client(host))
})

describe('API - Client', () => {
  describe('constructor', () => {
    it('should be instantiated', () => {
      expect(client).toBeInstanceOf(Client)
    })

    it('should set connection', () => {
      expect(client.http).toBeInstanceOf(HttpClient)
    })

    it('should return an API resource', () => {
      expect(client.transactions).toBeInstanceOf(ApiResource)
    })

    it('should use 1 as the default API version', () => {
      expect(client.version).toBe(2)
    })

    it('should set the API version', () => {
      client = (new Client('https://localhost:4003', 3))
      expect(client.version).toBe(3)
    })

    it('should set the HTTP client API version', () => {
      client = (new Client('https://localhost:4003', 3))
      expect(client.getConnection().version).toBe(3)
    })
  })

  describe('setVersion', () => {
    it('should set the API version', () => {
      client.setVersion(2)

      expect(client.version).toBe(2)
    })

    it('should set the API version of the HTTP client too', () => {
      client.setVersion(2)

      expect(client.http.version).toBe(2)
    })

    it('should throw an Error if the API version is falsy', async () => {
      expect(() => client.setVersion(0)).toThrowError(/api.*version/i)
    })
  })
})
