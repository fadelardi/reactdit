var React = require('react');
var Header = require('../components/Header.js');
var CommentList = require('../components/CommentList.js');

//Thread data
var threads = require('../stores/ThreadStore.js').threads;

var ThreadPage = React.createClass({
  getComments: function() {
    var title = this.props.params.title;
    for (var i = 0; i < threads.length; i++) {
      if (title == threads[i].title) {
        return threads[i].comments;
      }
    }
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <CommentList data={this.getComments()} />
      </div>
    );
  }
});

module.exports = ThreadPage;
