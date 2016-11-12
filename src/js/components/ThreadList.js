var React = require('react');
var Thread = require('./Thread');

var ThreadList = React.createClass({
  getThreads: function() {
    var threads = this.props.threads;

    if (threads.length == 0) {
      return (
        <div className="error">
          No threads in this forum
        </div>
      );
    }

    var list = threads.map(function(thread) {
      return (
        <Thread key={thread.id} id={thread.id} type={thread.type} title={thread.title} content={thread.content} author={thread.username} timestring={thread.created} forum={thread.forum} totalComments={thread.totalCount}  />
      );
    });

    return (
      <ul>
        {list}
      </ul>
    );
  },

  render: function() {
    return (
      <div className="container-fluid col-md-10 col-md-offset-1 content threadList">
        {this.getThreads()}
      </div>
    );
  }
});

module.exports = ThreadList;
