module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/votes')
    .reply(200, { data: [] })
    .get('/api/votes/123')
    .reply(200, { data: [] })
}
