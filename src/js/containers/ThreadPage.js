var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var threadActions = require('../actions/threadActions');


var mapStateToProps = function(store) {
  return {
    thread: store.threads
  }
}

var ThreadPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThread(this.props.params.id))
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <CommentList thread={this.props.thread} />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(ThreadPage);
