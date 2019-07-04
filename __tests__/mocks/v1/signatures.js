module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/signatures/fee')
    .reply(200, { data: [] })
}
