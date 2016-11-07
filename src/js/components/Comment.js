var React = require('react');
var Link = require('react-router').Link;
var AddComment = require('../containers/AddComment').default;
var moment = require('moment');


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

  formatDate: function(date) {
    var dateString = moment().from(date, true);
    return (dateString != 'Invalid date') ? dateString + ' ago' : 'unknown time ago';
  },

  render: function() {
    var styles = {
      display: (this.state.showReply) ? 'block' : 'none'
    };

    var replies = '';
    if (this.props.replies.length > 0 ) {
        replies = this.props.replies.map(function(reply) {
          return (
            <Comment key={reply.id} id={reply.id} threadId={reply.pk_threads_id} author={reply.author} timestring={reply.created} replies={reply.replies}>
            {reply.body}
            </Comment>
          );
        });
    }

    return (
        <li className="comment">
          <div className="header">
            <i className="fa fa-user" aria-hidden="true"></i> <Link to={"/user/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link>
            &nbsp;
            <span><i className="fa fa-clock-o" aria-hidden="true"></i> {this.formatDate(this.props.timestring)}</span>
          </div>
          <div className="body">{this.props.children}</div>
          <div className="options"><i className="fa fa-reply" aria-hidden="true"></i> <a href="" onClick={this.showReply}>Reply</a></div>
          <div className="newReply" style={styles}>
            <AddComment threadId={this.props.threadId} commentId={this.props.id} />
          </div>
          <div>
            <ul className="replies">
              {replies}
            </ul>
          </div>
        </li>
    );
  }
});

module.exports = Comment;
