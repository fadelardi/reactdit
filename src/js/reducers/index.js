var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  forum: require('./forumReducer'),
  thread: require('./threadReducer'),
  comment: require('./commentReducer')
});

module.exports = rootReducer;
