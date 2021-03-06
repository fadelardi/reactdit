module.exports.commentListReducer = function(state, action) {
  var initialState = {
    comments: [],
    loading: false,
    loaded: false,
    error: false
  };

  state = state || initialState;
  switch(action.type) {
    case 'FETCH_COMMENTS_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_COMMENTS_FULFILLED':
      return Object.assign({}, state, {
        comments: action.payload.data,
        loading: false,
        loaded: true
      });
    case 'FETCH_COMMENTS_REJECTED':
      return Object.assign({}, state, {
        error: true,
        loading: false
      });
    default:
      return state;
  }
};

module.exports.newCommentReducer = function(state, action) {
  var initialState = {
    submitted: false,
    added: false,
    error: false
  };

  state = state || initialState;

  switch(action.type) {
    case 'ADD_COMMENT_PENDING':
      return Object.assign({}, state, {
        submitted: true,
      });
    case 'ADD_COMMENT_FULFILLED':
      return Object.assign({}, state, {
        submitted: false,
        added: true,
      });
    case 'ADD_COMMENT_REJECTED':
      return Object.assign({}, state, {
        submitted: false,
        error: true
      });
    default:
      return state;
  }
};
