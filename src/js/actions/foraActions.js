var axios = require('axios');

module.exports.getFora = function() {
  return {
    type: 'FETCH_FORA',
    payload: axios.get('http://localhost:3000/fora')
  };
};
