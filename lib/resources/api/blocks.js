const Base = require('../../base')

module.exports = class Blocks extends Base {
  /**
   * Get all blocks.
   * @param {Object} [query]
   * @return {Promise}
   */
  all (query) {
    return this.http.get('blocks', query)
  }

  /**
   * Get block by id.
   * @param  {String} id
   * @return {Promise}
   */
  get (id) {
    return this.http.get(`blocks/${id}`)
  }

  /**
   * Get transactions by block id.
   * @param  {String} id
   * @param {Object} [pagination]
   * @return {Promise}
   */
  transactions (id, pagination) {
    return this.http.get(`blocks/${id}/transactions`, pagination)
  }

  /**
   * Search for blocks.
   * @param  {Object} [payload]
   * @param  {Object} [pagination]
   * @return {Promise}
   */
  search (payload = {}, pagination = {}) {
    return this.http.post('blocks/search', payload, pagination)
  }
}
