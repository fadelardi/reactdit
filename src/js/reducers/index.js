var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  forums: require('./foraReducer'),
  forum: require('./forumReducer'),
  thread: require('./threadReducer'),
  comment: require('./commentReducer'),
  comments: require('./commentsReducer')
});

module.exports = rootReducer;
