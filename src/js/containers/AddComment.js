var React = require('react');
var connect = require('react-redux').connect;
var commentActions = require('../actions/commentActions');

var mapStateToProps = function(store) {
  return {
    uid: store.user.user.id,
    submitted: store.newComment.submitted,
    error: store.newComment.error,
    added: store.newComment.added
  };
};

module.exports.AddComment = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.added) {
      this.setState({text: ''});
    }
    this.setState(nextProps);
  },

  handleChange: function(e) {
    this.setState({text: e.value});
  },

  handleSubmit: function(e) {
    var comment = e.target.comment.value;

    e.preventDefault();

    if (comment == '' || typeof comment == 'undefined') {
      return;
    }

    this.props.dispatch(commentActions.addComment({
      id: this.props.threadId,
      parent_id: (typeof this.props.commentId == 'undefined') ? 0 : this.props.commentId,
      uid: this.props.uid,
      comment: comment
    }));
  },

  render: function() {
    return (
      <div className="addComment col-md-12">
        <form onSubmit={this.handleSubmit}>
        <h4>Add your comment:</h4>
        <textarea name="comment" onChange={this.handleChange} value={this.state.text} required />
        <div><input className="btn btn-primary" type="submit" value="Submit post" /></div>
        </form>
      </div>
    );
  }
});

module.exports.default = connect(mapStateToProps)(this.AddComment);
