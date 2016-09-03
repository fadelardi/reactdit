var combineReducers = require('redux').combineReducers;
var threads = require('./threadsReducer');

var rootReducer = combineReducers({
  threads
});

module.exports = rootReducer;
