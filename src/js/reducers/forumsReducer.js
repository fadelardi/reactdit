module.exports.forumListReducer = function(state, action) {
  var initialState = {
    forums: [],
    loading: false,
    loaded: false,
    error: false
  };

  state = state || initialState;
  switch(action.type) {
    case 'FETCH_FORUMS_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_FORUMS_FULFILLED':
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        forums: action.payload.data
      });
    case 'FETCH_FORUMS_REJECTED':
      return Object.assign({}, state, {
        error: true,
        loading: false
      });
    default:
      return state;
  }
};
