var axios = require('axios');

module.exports.getThreads = function() {
  return {
    type: 'FETCH_THREADS',
    payload: axios.get('http://localhost:3000/')
  }
};

module.exports.getThread = function(id) {
  return {
    type: 'FETCH_THREAD',
    payload: axios.get('http://localhost:3000/t/' + id)
  }
}
