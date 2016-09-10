var axios = require('axios');

module.exports.getThreads = function(forum) {
  return {
    type: 'FETCH_THREADS',
    payload: axios.get('http://localhost:3000' + (typeof forum != 'undefined' ? '/f/' + encodeURIComponent(forum) : ''))
  }
};
