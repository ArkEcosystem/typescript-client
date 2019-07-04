module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/transactions')
    .reply(200, { data: [] })
    .get('/api/transactions/get')
    .query({ id: 123 })
    .reply(200, { data: [] })
    .get('/api/transactions/unconfirmed')
    .reply(200, { data: [] })
    .get('/api/transactions/unconfirmed/get')
    .query({ id: 123 })
    .reply(200, { data: [] })
}
