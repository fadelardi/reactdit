var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var ThreadList = require('../components/ThreadList');
var threadActions = require('../actions/threadActions');

var mapStateToProps = function(store) {
  return {
    threads: store.threads
  }
}

var IndexPage = React.createClass({
  componentWillMount: function() {
      this.props.dispatch(threadActions.getThreads())
  },

  componentWillReceiveProps: function(nextProps) {
      if (this.props.params.forum != nextProps.params.forum) {
        nextProps.dispatch(threadActions.getThreads(nextProps.params.forum));
      }
      this.setState(nextProps);
  },

  render: function() {
    return (
      <div className="container header">
        <Header />
        <ThreadList threads={this.props.threads} />
      </div>
    );
  }
});



module.exports = connect(mapStateToProps)(IndexPage);
