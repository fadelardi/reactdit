var axios = require('axios');

module.exports.getThread = function(id) {
  return {
    type: 'FETCH_THREAD',
    payload: axios.get('http://localhost:3000/t/' + id)
  };
};

module.exports.addComment = function(data) {
  var self = this;
  return function(dispatch) {
    dispatch({type: 'ADD_COMMENT_PENDING'});
    axios.post('http://localhost:3000/t/' + data.id, data)
    .then(function(res) {
      dispatch({type: 'ADD_COMMENT_FULFILLED', payload: res});
      dispatch(self.getThread(data.id));
    })
    .catch(function(err) {
      dispatch({type: 'ADD_COMMENT_REJECTED', payload: err});
    });
  };
};
