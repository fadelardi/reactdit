var React = require('react');
var Link = require('react-router').Link;
var AddComment = require('../containers/AddComment');

var Comment = React.createClass({
  componentWillMount: function() {
    this.setState({showReply: false});
  },

  showReply: function(e) {
    e.preventDefault();
    this.setState({showReply: true});
  },

  render: function() {
    var styles = {
      display: (this.state.showReply) ? 'block' : 'none'
    };

    return (
        <li className="comment">
          <div className="header"><Link to={"/user/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> {this.props.timestring}</div>
          <div className="body">{this.props.children}</div>
          <div className="options"><a href="" onClick={this.showReply}>Reply</a></div>
          <div className="newReply" style={styles}>
            <AddComment threadId={this.props.threadId} commentId={this.props.id} />
          </div>
        </li>
    );
  }
});

module.exports = Comment;
