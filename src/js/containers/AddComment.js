var React = require('react');
var connect = require('react-redux').connect;
var commentActions = require('../actions/commentActions');

var mapStateToProps = function(store) {
  return {
    submitted: store.comment.submitted,
    error: store.comment.error,
    added: store.comment.added
  };
};

var AddComment = React.createClass({
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

  handleSubmit: function() {
    var data, commentValue = this.refs.comment.value;
    if (commentValue != '') {
      data = {
        id: this.props.threadId,
        parent_id: (typeof this.props.commentId == 'undefined') ? 0 : this.props.commentId,
        uid: 1,
        comment: this.refs.comment.value
      };

      this.props.dispatch(commentActions.addComment(data));
    }
  },

  render: function() {
    return (
      <div className="addComment col-md-12">
        <div>Add your comment:</div>
        <textarea ref="comment" onChange={this.handleChange} value={this.state.text} />
        <div><button onClick={this.handleSubmit}>Submit Post</button></div>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(AddComment);
