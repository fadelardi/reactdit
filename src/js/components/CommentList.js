var React = require('react');
var Comment = require('./Comment');
var AddComment = require('../containers/AddComment')

var CommentList = React.createClass({
  render: function() {
      var thread = this.props.thread.threads;
      var comments = thread.map(function(comment) {
        return (
          <Comment key={comment.id} author={comment.author} timestring={comment.date}>
            {comment.body}
          </Comment>
        );
      });

      return (
      <div className="col-md-12 commentList">
        <div className="col-md-12">THREAD TITLE: {thread[0].title}</div>
        <div className="col-md-12">
        COMMENTS:
        <ul>
          {comments}
        </ul>
        <AddComment />
        </div>
      </div>
    );
  }
});

module.exports = CommentList;
