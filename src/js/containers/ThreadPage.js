var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var AddComment = require('./AddComment');
var threadActions = require('../actions/threadActions');


var mapStateToProps = function(store) {
  return {
    comments: store.thread.thread
  };
};

var ThreadPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThread(this.props.params.id));
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <CommentList comments={this.props.comments} />
        <AddComment threadId={this.props.params.id} />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(ThreadPage);
