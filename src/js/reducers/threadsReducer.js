var initialState = {
  threads: []
};

function threadsReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case 'THREADS_LIST':
      return Object.assign({}, state, {
        threads: action.payload
      });
    default:
      return state;
  }

}

module.exports = threadsReducer;
