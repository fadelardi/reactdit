var initialState = {
  comments: [],
  loading: false,
  loaded: false,
  error: false
};

function commentsReducer(state, action) {
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

}

module.exports = commentsReducer;
