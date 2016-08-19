var React = require('react');
var Thread = React.createClass({
  render: function() {
    return (
      <li>
        <div><a href="#">{this.props.title}</a></div>
        <div>submitted {this.props.timestring} by <a href="#">{this.props.author}</a> to <a href="#">{this.props.subforum}</a></div>
        <div><a href="#">{this.props.comments} comment(s)</a></div>
      </li>
    );
  }
});

module.exports = Thread;
