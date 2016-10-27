var React = require('react');
var Thread = require('./Thread');

var ThreadList = React.createClass({
  render: function() {
    var threads = this.props.threads;

    var list = threads.map(function(thread) {
      return (
        <Thread key={thread.id} id={thread.id} title={thread.title} author={thread.username} timestring={thread.created} forum={thread.forum} totalComments={thread.totalCount}  />
      );
    });

    return (
      <div className="col-md-12 threadList">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = ThreadList;
