var React = require('react');
var Link = require('react-router').Link;

var Thread = React.createClass({
  render: function() {
    return (
      <li>
        <div><Link to="/thread">{this.props.title}</Link></div>
        <div>submitted {this.props.timestring} by <Link to={"/user/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> to <Link to="/">{this.props.subforum}</Link></div>
        <div><Link to={"/thread/" + encodeURIComponent(this.props.title)}>{this.props.totalComments} comment(s)</Link></div>
      </li>
    );
  }
});

module.exports = Thread;
