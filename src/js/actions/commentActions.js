var axios = require('axios');
var threadActions = require('./threadActions');

module.exports.getCommentList = function(threadId) {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios.get('http://localhost:3000/t/' + threadId + '/comments')
  };
};

module.exports.addComment = function(data) {
  var self = this;
  return function(dispatch) {
    dispatch({type: 'ADD_COMMENT_PENDING'});
    return axios.post('http://localhost:3000/t/' + data.id, data)
    .then(function(res) {
      dispatch({type: 'ADD_COMMENT_FULFILLED', payload: res});
      dispatch(threadActions.getThread(data.id));
      dispatch(self.getCommentList(data.id));
    })
    .catch(function(err) {
      dispatch({type: 'ADD_COMMENT_REJECTED', payload: err});
    });
  };
};
