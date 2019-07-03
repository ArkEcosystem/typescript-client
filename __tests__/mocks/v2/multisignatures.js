module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/multisignatures')
    .reply(200, { data: [] })
    .get('/api/multisignatures/pending')
    .reply(200, { data: [] })
    .get('/api/multisignatures/wallets')
    .reply(200, { data: [] })
}
