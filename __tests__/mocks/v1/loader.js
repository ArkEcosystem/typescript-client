module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/loader/autoconfigure')
    .reply(200, { data: [] })
    .get('/api/loader/status')
    .reply(200, { data: [] })
    .get('/api/loader/status/sync')
    .reply(200, { data: [] })
}
