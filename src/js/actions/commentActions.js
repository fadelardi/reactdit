var axios = require('axios');
var threadActions = require('./threadActions');

module.exports.getComments = function(threadId) {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios.get('http://localhost:3000/t/' + threadId + '/comments')
  };
};

module.exports.addComment = function(data) {
  return function(dispatch) {
    dispatch({type: 'ADD_COMMENT_PENDING'});
    return axios.post('http://localhost:3000/t/' + data.id, data)
    .then(function(res) {
      dispatch({type: 'ADD_COMMENT_FULFILLED', payload: res});
      dispatch(threadActions.getThread(data.id));
    })
    .catch(function(err) {
      dispatch({type: 'ADD_COMMENT_REJECTED', payload: err});
    });
  };
};
