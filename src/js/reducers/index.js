var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  // current user
  user: require('./userReducer').userReducer,
  // list of forums
  forumList: require('./forumsReducer').forumListReducer,
  // list of threads
  threadList: require('./threadsReducer').threadListReducer,
  // current thread
  thread: require('./threadsReducer').threadReducer,
  // list of comments
  commentList: require('./commentsReducer').commentListReducer,
  // status of new comment
  newComment: require('./commentsReducer').newCommentReducer,
});

module.exports = rootReducer;
