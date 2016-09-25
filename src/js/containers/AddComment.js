var React = require('react');
var connect = require('react-redux').connect;
var threadActions = require('../actions/threadActions');


var AddComment = React.createClass({
  handleSubmit: function() {
    var data, commentValue = this.refs.comment.value;
    if (commentValue != '') {
      data = {
        id: this.props.threadId,
        parent_id: (typeof this.props.commentId == 'undefined') ? 0 : this.props.commentId,
        uid: 1,
        comment: this.refs.comment.value
      };

      this.props.dispatch(threadActions.addComment(data));
    }
  },

  render: function() {
    return (
      <div className="addComment col-md-12">
        <div>Add your comment:</div>
        <textarea ref="comment" />
        <div><button onClick={this.handleSubmit}>Submit Post</button></div>
      </div>
    );
  }
});

module.exports = connect()(AddComment);
