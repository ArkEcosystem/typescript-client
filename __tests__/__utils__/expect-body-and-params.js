// https://github.com/ctimmerm/axios-mock-adapter/pull/130
module.exports = (mock, { params, data }) => {
  mock.reply(request => {
    try {
      expect(request.params).toEqual(params)
      expect(request.data).toEqual(JSON.stringify(data))
      return [200, []]
    } catch (error){
      console.log(error)
      return [500]
    }
  })
}
