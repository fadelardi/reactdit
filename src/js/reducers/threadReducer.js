var initialState = {
  thread: [],
  loading: false,
  loaded: false,
  error: false
};

function threadReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case 'FETCH_THREAD_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_THREAD_FULFILLED':
      return Object.assign({}, state, {
        thread: action.payload.data,
        loading: false,
        loaded: true
      });
    case 'FETCH_THREAD_REJECTED':
      return Object.assign({}, state, {
        error: true,
        loading: false
      });
    default:
      return state;
  }

}

module.exports = threadReducer;
