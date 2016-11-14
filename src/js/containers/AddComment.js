var React = require('react');
var connect = require('react-redux').connect;
var commentActions = require('../actions/commentActions');

var mapStateToProps = function(store) {
  return {
    // uid of the current user
    uid: store.user.user.id,
    // was the comment submitted?
    submitted: store.newComment.submitted,
    // was there an error when it was submitted?
    error: store.newComment.error,
    // has the comment been added successfully?
    added: store.newComment.added
  };
};

// encapsulate and export naked ("un-connected") component for testing
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
  // when textarea changes we update the state manually
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
      // current comment might be a reply to another comment, and if so, will have a comment id
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

// connected component
module.exports.default = connect(mapStateToProps)(this.AddComment);
