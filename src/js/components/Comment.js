var React = require('react');
var Link = require('react-router').Link;
var AddComment = require('../containers/AddComment');

var Comment = React.createClass({
  getInitialState: function() {
    return {showReply: false};
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({showReply: false});
    this.setState(nextProps);
  },

  showReply: function(e) {
    e.preventDefault();
    this.setState({showReply: true});
  },

  render: function() {
    var styles = {
      display: (this.state.showReply) ? 'block' : 'none'
    };

    var replies = '';
    if (this.props.replies.length > 0 ) {
        replies = this.props.replies.map(function(reply) {
          return (
            <Comment key={reply.id} id={reply.id} threadId={reply.pk_threads_id} author={reply.author} timestring={reply.date} replies={reply.replies}>
            {reply.body}
            </Comment>
          );
        });
    }

    return (
        <li className="comment">
          <div className="header"><Link to={"/user/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> {this.props.timestring}</div>
          <div className="body">{this.props.children}</div>
          <div className="options"><a href="" onClick={this.showReply}>Reply</a></div>
          <div className="newReply" style={styles}>
            <AddComment threadId={this.props.threadId} commentId={this.props.id} />
          </div>
          <div className="replies">
            <ul>
              {replies}
            </ul>
          </div>
        </li>
    );
  }
});

module.exports = Comment;
