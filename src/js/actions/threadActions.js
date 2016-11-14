var config = require('../config.js');
var axios = require('axios');

// get specific thread
module.exports.getThread = function(id) {
  return {
    type: 'FETCH_THREAD',
    payload: axios.get(config.API_URL + '/t/' + id)
  };
};

// get thread list for a forum/all
module.exports.getThreadList = function(forum) {
  return {
    type: 'FETCH_THREADS',
    payload: axios.get(config.API_URL + (typeof forum != 'undefined' ? '/f/' + encodeURIComponent(forum) : ''))
  };
};

// add thread to forum
module.exports.addThread = function(data, router) {
  return function(dispatch) {
    dispatch({type: 'ADD_THREAD_PENDING'});
    return axios.post(config.API_URL, data)
    .then(function(res) {
      router.push('/f/' + data.fid);
      dispatch({type: 'ADD_THREAD_FULFILLED', payload: res});
    })
    .catch(function(err) {
      dispatch({type: 'ADD_THREAD_REJECTED', payload: err});
    });
  };
};
