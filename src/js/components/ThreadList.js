var React = require('react');
var Thread = require('./Thread');

var ThreadList = React.createClass({
  render: function() {
    var threads = this.props.threads.threads;

    var list = threads.map(function(thread) {
      return (
        <Thread key={thread.id} title={thread.title} author={thread.author} timestring={thread.timestring} subforum={thread.subforum} totalComments={thread.comments.length}  />
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
