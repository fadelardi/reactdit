var THREAD_TYPE_LINK = require('../config').THREAD_TYPE_LINK;
var React = require('react');
var Link = require('react-router').Link;
var moment = require('moment');

var Thread = React.createClass({
  formatDate: function(date) {
    var dateString = moment().from(date, true);
    return (dateString != 'Invalid date') ? dateString + ' ago' : 'unknown time ago';
  },
  // title of thread could change behavior according to thread type 
  titleLink: function() {
    if (this.props.type == THREAD_TYPE_LINK) {
      return (<a href={this.props.content} id="link" target="_new">{this.props.title}</a>);
    }

    return (<Link to={"/t/" + this.props.id}>{this.props.title}</Link>);
  },

  render: function() {
    return (
      <li>
        <div className="title">{this.titleLink()} ({this.props.type})</div>
        <div>submitted {this.formatDate(this.props.timestring)} by <Link to={"/u/" + encodeURIComponent(this.props.author)}>{this.props.author}</Link> to <Link to={'/f/' + encodeURIComponent(this.props.forum)}>{this.props.forum}</Link></div>
        <div><i className="fa fa-book" aria-hidden="true"></i> <Link to={"/t/" + this.props.id}>{this.props.totalComments} comment(s)</Link></div>
      </li>
    );
  }
});

module.exports = Thread;
