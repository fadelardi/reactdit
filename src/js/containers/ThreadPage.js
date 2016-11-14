var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var ThreadDetail = require('../components/ThreadDetail');
var AddComment = require('./AddComment').default;
var threadActions = require('../actions/threadActions');
var commentActions = require('../actions/commentActions');

var mapStateToProps = function(store) {
  return {
    // current user
    user: store.user.user,
    // current thread
    thread: store.thread.thread,
    // list of comments for current thread
    comments: store.commentList.comments,
    // is the thread loaded?
    loaded: store.commentList.loaded,
    // is the thread loading?
    loading: store.commentList.loading,
    // has there been an error when loading the thread?
    error: store.commentList.error
  };
};
// naked component
module.exports.ThreadPage = React.createClass({
  // get thread detail and comments upon mount
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThread(this.props.params.id));
      this.props.dispatch(commentActions.getCommentList(this.props.params.id));
  },

  render: function() {
    return (
      <div>
        <Header user={this.props.user} />
        <div className="col-md-10 col-md-offset-1 content">
          <ThreadDetail thread={this.props.thread} />
          <CommentList comments={this.props.comments} loaded={this.props.loaded} loading={this.props.loading} error={this.props.error} />
          <AddComment threadId={this.props.params.id} />
        </div>
      </div>
    );
  }
});
// connected component
module.exports.default = connect(mapStateToProps)(this.ThreadPage);
