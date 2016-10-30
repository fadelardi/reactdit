var config = require('../config.js');
var axios = require('axios');

module.exports.getForums = function() {
  return {
    type: 'FETCH_FORUMS',
    payload: axios.get(config.API_URL + '/forums')
  };
};
