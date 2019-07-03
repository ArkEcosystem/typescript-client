module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/delegates')
    .reply(200, { data: [] })
    .get('/api/delegates/123')
    .reply(200, { data: [] })
    .get('/api/delegates/123/blocks')
    .reply(200, { data: [] })
    .get('/api/delegates/123/voters')
    .reply(200, { data: [] })
}
