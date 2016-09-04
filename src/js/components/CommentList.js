var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
  render: function() {
      var thread = this.props.thread.threads[0];
      console.log(this.props);
      var comments = thread.comments.map(function(comment) {
        return (
          <Comment key={comment.id} author={comment.author} timestring={comment.date}>
            {comment.body}
          </Comment>
        );
      });

      return (
      <div className="col-md-12 commentList">
        <div className="col-md-12">THREAD TITLE: {thread.title}</div>
        <div className="col-md-12">
        COMMENTS:
        <ul>
          {comments}
        </ul>
        </div>
      </div>
    );
  }
});

module.exports = CommentList;
