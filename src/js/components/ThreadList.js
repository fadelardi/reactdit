var React = require('react');
var Thread = require('./Thread.js');
var observer = require('mobx-react').observer;

var ThreadList = observer(React.createClass({
  render: function() {
      var list = this.props.data.threads.map(function(thread) {
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
}));

module.exports = ThreadList;
