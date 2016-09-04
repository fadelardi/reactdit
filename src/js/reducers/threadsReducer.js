var initialState = {
  threads: [],
  loading: false,
  loaded: false,
  error: null
};

function threadsReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case 'FETCH_THREADS_PENDING':
    case 'FETCH_THREAD_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_THREADS_FULFILLED':
    case 'FETCH_THREAD_FULFILLED':
      return Object.assign({}, state, {
        threads: action.payload.data,
        loading: false,
        loaded: true
      });
    case 'FETCH_THREADS_REJECTED':
    case 'FETCH_THREAD_REJECTED':
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false
      });
    default:
      return state;
  }

}

module.exports = threadsReducer;
