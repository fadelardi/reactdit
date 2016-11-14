var config = require('../config.js');
var axios = require('axios');
var threadActions = require('./threadActions');

// get list of comments in a thread
module.exports.getCommentList = function(threadId) {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios.get(config.API_URL + '/t/' + threadId + '/comments')
  };
};

// add comment to thread
module.exports.addComment = function(data) {
  var self = this;
  return function(dispatch) {
    dispatch({type: 'ADD_COMMENT_PENDING'});
    return axios.post(config.API_URL + '/t/' + data.id, data)
    .then(function(res) {
      // several actions here: dispatch fulfilled, get threads, and get comments again
      dispatch({type: 'ADD_COMMENT_FULFILLED', payload: res});
      dispatch(threadActions.getThread(data.id));
      dispatch(self.getCommentList(data.id));
    })
    .catch(function(err) {
      dispatch({type: 'ADD_COMMENT_REJECTED', payload: err});
    });
  };
};
