var initialState = {
  threads: [],
  loading: false,
  loaded: false,
  error: false
};

function forumReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case 'FETCH_THREADS_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_THREADS_FULFILLED':
      return Object.assign({}, state, {
        threads: action.payload.data,
        loading: false,
        loaded: true
      });
    case 'FETCH_THREADS_REJECTED':
      return Object.assign({}, state, {
        error: true,
        loading: false
      });
    default:
      return state;
  }

}

module.exports = forumReducer;
