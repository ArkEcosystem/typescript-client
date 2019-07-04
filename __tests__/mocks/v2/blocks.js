module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/blocks')
    .reply(200, { data: [] })
    .get('/api/blocks/123')
    .reply(200, { data: [] })
    .get('/api/blocks/123/transactions')
    .reply(200, { data: [] })
    .post('/api/blocks/search')
    .reply(200, { data: [] })
}
