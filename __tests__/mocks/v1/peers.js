module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/peers')
    .reply(200, { data: [] })
    .get('/api/peers/get')
    .query({
      ip: '127.0.0.1',
      port: 4001
    })
    .reply(200, { data: [] })
    .get('/api/peers/version')
    .reply(200, { data: [] })
}
