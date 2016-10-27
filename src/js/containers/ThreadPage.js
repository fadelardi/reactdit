var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var ThreadDetail = require('../components/ThreadDetail');
var AddComment = require('./AddComment');
var threadActions = require('../actions/threadActions');
var commentActions = require('../actions/commentActions');

var mapStateToProps = function(store) {
  return {
    thread: store.thread.thread,
    comments: store.commentList.comments,
    loaded: store.commentList.loaded,
    loading: store.commentList.loading,
    error: store.commentList.error
  };
};

var ThreadPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThread(this.props.params.id));
      this.props.dispatch(commentActions.getCommentList(this.props.params.id));
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <ThreadDetail thread={this.props.thread} />
        <CommentList comments={this.props.comments} loaded={this.props.loaded} loading={this.props.loading} error={this.props.error} />
        <AddComment threadId={this.props.params.id} />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(ThreadPage);
