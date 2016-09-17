var axios = require('axios');

module.exports.getThreads = function(forum) {
  return {
    type: 'FETCH_THREADS',
    payload: axios.get('http://localhost:3000' + (typeof forum != 'undefined' ? '/f/' + encodeURIComponent(forum) : ''))
  }
};

module.exports.addThread = function(data, router) {
  return function(dispatch) {
    dispatch({type: 'ADD_THREAD_PENDING'});
    axios.post('http://localhost:3000/', data)
    .then(function(res) {
      router.push('/f/' + data.fid);
      dispatch({type: 'ADD_THREAD_FULFILLED', payload: res});
    })
    .catch(function(err) {
      dispatch({type: 'ADD_THREAD_REJECTED'});
    });
  };
}
