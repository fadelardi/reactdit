var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var ThreadList = require('../components/ThreadList');
var forumActions = require('../actions/forumActions');

var mapStateToProps = function(store) {
  return {
    threads: store.forum.threads
  };
};

var ForumPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(forumActions.getThreads());
  },

  componentWillReceiveProps: function(nextProps) {
      if (this.props.params.forum != nextProps.params.forum) {
        nextProps.dispatch(forumActions.getThreads(nextProps.params.forum));
      }
      this.setState(nextProps);
  },

  render: function() {
    return (
      <div className="container header">
        <Header forum={this.props.params.forum} />
        <ThreadList threads={this.props.threads} />
      </div>
    );
  }
});



module.exports = connect(mapStateToProps)(ForumPage);
