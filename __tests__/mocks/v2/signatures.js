module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/signatures')
    .reply(200, { data: [] })
}
