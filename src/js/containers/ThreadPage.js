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
    user: store.user.user,
    thread: store.thread.thread,
    comments: store.commentList.comments,
    loaded: store.commentList.loaded,
    loading: store.commentList.loading,
    error: store.commentList.error
  };
};

module.exports.ThreadPage = React.createClass({
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

module.exports.default = connect(mapStateToProps)(this.ThreadPage);
