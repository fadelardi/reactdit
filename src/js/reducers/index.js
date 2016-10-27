var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  forumList: require('./forumsReducer').forumListReducer,
  threadList: require('./threadsReducer').threadListReducer,
  thread: require('./threadsReducer').threadReducer,
  commentList: require('./commentsReducer').commentListReducer,
  newComment: require('./commentsReducer').newCommentReducer,
});

module.exports = rootReducer;
