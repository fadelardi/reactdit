var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var ThreadList = require('../components/ThreadList');
var threadActions = require('../actions/threadActions');
var withRouter = require('react-router').withRouter;

var mapStateToProps = function(store) {
  return {
    threads: store.threadList.threads,
    error: store.threadList.error,
    loading: store.threadList.loading,
    loaded: store.threadList.loaded
  };
};

var ForumPage = withRouter(React.createClass({
  displayName: 'ForumPage',

  componentWillMount: function() {
      this.props.dispatch(threadActions.getThreadList());
  },

  componentWillReceiveProps: function(nextProps) {
      if (this.props.params.forum != nextProps.params.forum) {
        nextProps.dispatch(threadActions.getThreadList(nextProps.params.forum));
      }
      this.setState(nextProps);
  },

  render: function() {
    return (
      <div>
        <Header forum={this.props.params.forum} />
        {this.props.loading &&
        <div className="col-md-12 loading">Loading...</div>
        }
        {this.props.error &&
        <div className="col-md-12 error">There was an error loading this forum. Please try again</div>
        }
        {this.props.loaded &&
        <ThreadList threads={this.props.threads} />
        }
      </div>
    );
  }
}));



module.exports = connect(mapStateToProps)(ForumPage);
