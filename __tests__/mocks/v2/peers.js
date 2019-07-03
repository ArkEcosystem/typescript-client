module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/peers')
    .reply(200, { data: [] })
    .get('/api/peers/123')
    .reply(200, { data: [] })
}
