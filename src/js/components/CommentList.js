var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
  render: function() {
      var comments = this.props.comments;
      var commentLis = comments.map(function(comment) {
        return (
          <Comment key={comment.id} id={comment.id} threadId={comment.pk_threads_id} author={comment.author} timestring={comment.date}>
            {comment.body}
          </Comment>
        );
      });

      return (
      <div className="col-md-12 commentList">
        <div className="col-md-12">
        COMMENTS:
        <ul>
          {commentLis}
        </ul>
        </div>
      </div>
    );
  }
});

module.exports = CommentList;
