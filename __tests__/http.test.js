const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

const toHaveAtLeastHeaders = require('./matchers/http/headers')
expect.extend({ toHaveAtLeastHeaders })

// NOTE: until this PR or similar is merged:
// https://github.com/ctimmerm/axios-mock-adapter/pull/130
const expectBodyAndParams = (mock, { params, data }) => {
  mock.reply(request => {
    try {
      expect(request.params).toEqual(params)
      expect(request.data).toEqual(JSON.stringify(data))
      return [200, []]
    } catch (error){
      console.log(error)
      return [500]
    }
  })
}

const HttpClient = require('../lib/http')

const host = 'http://example.net'
let client

beforeEach(() => {
  client = new HttpClient(host, 2)
})

describe('API - HTTP Client', () => {
  let defaultHeaders

  beforeEach(() => {
    defaultHeaders = {
      'Accept': `application/vnd.ark.core-api.v${client.version}+json`
    }
  })

  describe('constructor', () => {
    it('should be instantiated', () => {
      expect(client).toBeInstanceOf(HttpClient)
    })

    describe('host', () => {
      it('should set the host', () => {
        client = new HttpClient(host)
        expect(client.host).toBe(host)
      })

      it('should remove the final slash of the host when necessary', () => {
        client = new HttpClient('http://example.net/')
        expect(client.host).toBe('http://example.net')
      })

      it('should check that the host is not empty', () => {
        expect(() => new HttpClient('')).toThrow()
      })
    })

    describe('API version parameter', () => {
      it('should set the API version', () => {
        client = new HttpClient(host, 3)
        expect(client.version).toBe(3)
      })

      it('should use 2 when is not present', () => {
        client = new HttpClient(host)
        expect(client.version).toBe(2)
      })
    })
  })

  describe('setTimeout', () => {
    it('should set the timeout', () => {
      expect(client.timeout).toBe(60000)
      client.setTimeout(5000)
      expect(client.timeout).toBe(5000)
    })
  })

  describe('setHeaders', () => {
    it('should set the headers', () => {
      const newHeaders = {
        'API-Version': 30,
        other: 'value'
      }
      client.setHeaders(newHeaders)

      expect(client.headers).toEqual(newHeaders)
    })
  })

  describe('sendRequest', () => {
    it('should ignore the case of the method name', async () => {
      mock.onGet(`${host}/path`).reply(200, { data: [] })

      const response = await client.sendRequest('GET', 'path')

      expect(response.status).toBe(200)
    })

    it('should ignore the inital "/" on the `path` parameter', async () => {
      mock.onGet(`${host}/path`).reply(200, { data: [] })

      const response = await client.sendRequest('get', '/path')

      expect(response.status).toBe(200)
    })
  })

  describe('get', () => {
    beforeEach(() => {
      mock.onGet(`${host}/api/ENDPOINT`).reply(200, { data: [] })
    })

    it('should send GET requests to the API', async () => {
      const response = await client.get('ENDPOINT')

      expect(response.status).toBe(200)
    })

    it('should use the necessary request headers', async () => {
      const response = await client.get('ENDPOINT')

      expect(response.config).toHaveAtLeastHeaders(defaultHeaders)
    })

    it('should send the request params', async () => {
      const params = { param1: 'value1', param2: 'value2' }

      mock.reset()
      mock.onGet(`${host}/api/ENDPOINT`, { params }).reply(200, { data: [] })

      const response = await client.get('ENDPOINT', params)

      expect(response.status).toBe(200)
    })
  })

  describe('post', () => {
    beforeEach(() => {
      mock.onPost(`${host}/api/ENDPOINT`).reply(200, { data: [] })
    })

    it('should send POST requests to the API', async () => {
      const response = await client.post('ENDPOINT')

      expect(response.status).toBe(200)
    })

    it('should use the necessary request headers', async () => {
      const response = await client.post('ENDPOINT')

      expect(response.config).toHaveAtLeastHeaders(defaultHeaders)
    })

    it('should admit sending data on the request body', async () => {
      const data = { example: 'example' }

      mock.reset()
      mock.onPost(`${host}/api/ENDPOINT`, data).reply(200, { data: [] })

      const response = await client.post('ENDPOINT', data)

      expect(response.status).toBe(200)
    })

    it('should admit sending querystring parameters', async () => {
      const data = { example: 'example' }
      const params = { page: 1 }

      mock.reset()
      expectBodyAndParams(mock.onPost(`${host}/api/ENDPOINT`), { params, data })

      const response = await client.post('ENDPOINT', data, params)

      expect(response.status).toBe(200)
    })
  })

  describe('put', () => {
    beforeEach(() => {
      mock.onPut(`${host}/api/ENDPOINT`).reply(200, { data: [] })
    })

    it('should send PUT requests to the API', async () => {
      const response = await client.put('ENDPOINT')

      expect(response.status).toBe(200)
    })

    it('should use the necessary request headers', async () => {
      const response = await client.put('ENDPOINT')

      expect(response.config).toHaveAtLeastHeaders(defaultHeaders)
    })

    it('should admit sending data on the request body', async () => {
      const data = { example: 'example' }

      mock.reset()
      mock.onPut(`${host}/api/ENDPOINT`, data).reply(200, { data: [] })

      const response = await client.put('ENDPOINT', data)

      expect(response.status).toBe(200)
    })

    it('should admit sending querystring parameters', async () => {
      const data = { example: 'example' }
      const params = { page: 1 }

      mock.reset()
      expectBodyAndParams(mock.onPut(`${host}/api/ENDPOINT`), { params, data })

      const response = await client.put('ENDPOINT', data, params)

      expect(response.status).toBe(200)
    })
  })

  describe('patch', () => {
    beforeEach(() => {
      mock.onPatch(`${host}/api/ENDPOINT`).reply(200, { data: [] })
    })

    it('should send PATCH requests to the API', async () => {
      const response = await client.patch('ENDPOINT')

      expect(response.status).toBe(200)
    })

    it('should use the necessary request headers', async () => {
      const response = await client.patch('ENDPOINT')

      expect(response.config).toHaveAtLeastHeaders(defaultHeaders)
    })

    it('should admit sending data on the request body', async () => {
      const data = { example: 'example' }

      mock.reset()
      mock.onPatch(`${host}/api/ENDPOINT`, data).reply(200, { data: [] })

      const response = await client.patch('ENDPOINT', data)

      expect(response.status).toBe(200)
    })

    it('should admit sending querystring parameters', async () => {
      const data = { example: 'example' }
      const params = { page: 1 }

      mock.reset()
      expectBodyAndParams(mock.onPatch(`${host}/api/ENDPOINT`), { params, data })

      const response = await client.patch('ENDPOINT', data, params)

      expect(response.status).toBe(200)
    })
  })

  describe('delete', () => {
    beforeEach(() => {
      mock.onDelete(`${host}/api/ENDPOINT`).reply(200, { data: [] })
    })

    it('should send DELETE requests to the API', async () => {
      const response = await client.delete('ENDPOINT')

      expect(response.status).toBe(200)
    })

    it('should use the necessary request headers', async () => {
      const response = await client.delete('ENDPOINT')

      expect(response.config).toHaveAtLeastHeaders(defaultHeaders)
    })

    it('should send the request params', async () => {
      const params = { param1: 'value1', param2: 'value2' }

      mock.reset()
      mock.onDelete(`${host}/api/ENDPOINT`, { params }).reply(200, { data: [] })

      const response = await client.delete('ENDPOINT', params)

      expect(response.status).toBe(200)
    })
  })
})
