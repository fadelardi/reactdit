var React = require('react');
var Comment = require('./Comment.js');

var CommentList = React.createClass({
  render: function() {
      var list = this.props.data.map(function(comment) {
        return (
          <Comment key={comment.id} author={comment.author} timestring={comment.date}>
            {comment.body}
          </Comment>
        );
      });

      return (
      <div className="col-md-12 commentList">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = CommentList;
