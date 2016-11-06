var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
  getCommentList: function() {
    var comments = this.props.comments;
    var commentLis = comments.map(function(comment) {
      return (
        <Comment key={comment.id} id={comment.id} threadId={comment.pk_threads_id} author={comment.author} timestring={comment.created} replies={comment.replies}>
          {comment.body}
        </Comment>
      );
    });
    return (
      <ul>
        {commentLis}
      </ul>
    );
  },

  render: function() {
    return (
      <div className="col-md-12 commentList">
        <div className="col-md-12">
          {this.props.loading &&
            <div className="loading">Loading...</div>
          }
          {this.props.error &&
            <div className="error">The comments of this thread could not be loaded.</div>
          }
          {this.props.loaded &&
            <div className="comments">{this.getCommentList()}</div>
          }
        </div>
      </div>
    );
  }
});

module.exports = CommentList;
