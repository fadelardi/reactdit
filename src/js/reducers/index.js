var combineReducers = require('redux').combineReducers;
var threads = require('./threadsReducer');

var rootReducer = combineReducers({
  threads: threads
});

module.exports = rootReducer;
