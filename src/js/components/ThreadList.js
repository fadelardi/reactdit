var React = require('react');
var Thread = require('./Thread.js');

var ThreadList = React.createClass({
  render: function() {
      var list = this.props.data.map(function(thread) {
        return (
          <Thread title={thread.title} author={thread.author} timestring={thread.timestring} subforum={thread.subforum} totalComments={thread.comments.length}  />
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
