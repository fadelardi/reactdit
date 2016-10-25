var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  fora: require('./foraReducer'),
  forum: require('./forumReducer'),
  thread: require('./threadReducer'),
  comment: require('./commentReducer'),
  comments: require('./commentsReducer')
});

module.exports = rootReducer;
