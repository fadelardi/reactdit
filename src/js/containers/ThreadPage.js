var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var CommentList = require('../components/CommentList');
var AddComment = require('./AddComment');
var threadActions = require('../actions/threadActions');


var mapStateToProps = function(store) {
  return {
    comments: store.thread.thread,
    loaded: store.thread.loaded,
    loading: store.thread.loading,
    error: store.thread.error
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
        {this.props.loading &&
          <div className="col-md-12 loading">Loading...</div>
        }
        {this.props.error &&
            <div className="col-md-12 error">The thread could not be loaded. Please try again.</div>
        }
        {this.props.loaded &&
          <CommentList comments={this.props.comments} />
        }
        <AddComment threadId={this.props.params.id} />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(ThreadPage);
