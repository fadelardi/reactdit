var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var ThreadDetail = require('../components/ThreadDetail');
var AddComment = require('./AddComment');
var threadActions = require('../actions/threadActions');


var mapStateToProps = function(store) {
  return {
    thread: store.thread.thread,
    comments: store.comments.comments,
    loaded: store.thread.loaded,
    loading: store.thread.loading,
    error: store.thread.error
  };
};

var ThreadPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThread(this.props.params.id));
      this.props.dispatch(threadActions.getComments(this.props.params.id));
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
