var initialState = {
  submitted: false,
  added: false,
  error: false
};

function commentReducer(state, action) {
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
}

module.exports = commentReducer;
