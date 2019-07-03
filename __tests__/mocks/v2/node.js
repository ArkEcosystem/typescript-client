module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/node/status')
    .reply(200, { data: [] })
    .get('/api/node/syncing')
    .reply(200, { data: [] })
    .get('/api/node/configuration')
    .reply(200, { data: [] })
    .get('/api/node/fees').query({ days: 30 })
    .reply(200, { data: [] })
}
