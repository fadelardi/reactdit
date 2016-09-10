var axios = require('axios');

module.exports.getThread = function(id) {
  return {
    type: 'FETCH_THREAD',
    payload: axios.get('http://localhost:3000/t/' + id)
  }
}
