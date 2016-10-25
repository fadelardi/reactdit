var axios = require('axios');

module.exports.getForums = function() {
  return {
    type: 'FETCH_FORUMS',
    payload: axios.get('http://localhost:3000/forums')
  };
};
