module.exports = (nock, host) => {
  nock(host)
    .persist()
    .get('/api/webhooks')
    .reply(200, { data: [] })
    .post('/api/webhooks')
    .reply(201, { data: [] })
    .get('/api/webhooks/123')
    .reply(200, { data: [] })
    .put('/api/webhooks/123')
    .reply(204, { data: [] })
    .delete('/api/webhooks/123')
    .reply(204, { data: [] })
}
