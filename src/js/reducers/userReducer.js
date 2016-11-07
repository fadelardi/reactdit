module.exports.userReducer = function(state, action) {
  var initialState = {
    user: require('../config').ANON_USER
  };

  state = state || initialState;
  switch(action.type) {
    default:
      return state;
  }
};
