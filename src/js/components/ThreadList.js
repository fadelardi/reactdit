var React = require('react');
var Thread = require('./Thread.js');
var observer = require('mobx-react').observer;

var ThreadList = observer(React.createClass({
  render: function() {
    var store = this.props.data;

    var list = store.threads.map(function(thread) {
      return (
        <Thread key={thread.id} title={thread.title} author={thread.author} timestring={thread.timestring} subforum={thread.subforum} totalComments={thread.comments.length}  />
      );
    });

    if (store.loading) {
      return (
        <div className="col-md-12 threadsLoading">
          <h1>Threads are loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="col-md-12 threadList">
          <ul>
            {list}
          </ul>
        </div>
      );
    }
  }
}));

module.exports = ThreadList;
