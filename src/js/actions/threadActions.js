var axios = require('axios');

module.exports.getThreads = function getThreads() {
  return {
    type: 'FETCH_THREADS',
    payload: axios.get('http://localhost:3000/')
  }
};
