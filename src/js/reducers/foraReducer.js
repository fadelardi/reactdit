var initialState = {
  fora: [],
  loading: false,
  loaded: false,
  error: false
};

function foraReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case 'FETCH_FORA_PENDING':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_FORA_FULFILLED':
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        fora: action.payload.data
      });
    case 'FETCH_FORA_REJECTED':
      return Object.assign({}, state, {
        error: true,
        loading: false
      });
    default:
      return state;
  }
}

module.exports = foraReducer;
