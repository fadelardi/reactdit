var React = require('react');
var Link = require('react-router').Link;
var moment = require('moment');

var Thread = React.createClass({
  formatDate: function(date) {
    var dateString = moment().from(date, true);
    return (dateString != 'Invalid date') ? dateString + ' ago' : 'unknown time ago';
  },

  render: function() {
    return (
      <li>
        <div><Link to={"/t/" + this.props.id}>{this.props.title}</Link></div>
        <div>submitted {this.formatDate(this.props.timestring)} by <Link to={"/u/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> to <Link to={'/f/' + encodeURIComponent(this.props.forum)}>{this.props.forum}</Link></div>
        <div><Link to={"/t/" + this.props.id}>{this.props.totalComments} comment(s)</Link></div>
      </li>
    );
  }
});

module.exports = Thread;
