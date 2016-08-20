var React = require('react');
var Link = require('react-router').Link;

var Comment = React.createClass({
  render: function() {
    return (
        <li className="comment">
          <div className="header"><Link to={"/user/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> {this.props.timestring}</div>
          <div className="body">{this.props.children}</div>
        </li>
    );
  }
});

module.exports = Comment;
