var React = require('react');
var UserBox = require('./UserBox');
var Link = require('react-router').Link;

var Header = React.createClass({
  createNewLink: function(forum) {
    var link = '/new';
    if (typeof forum != 'undefined') {
      link = '/f/' + forum + link;
    }
    return link;
  },

  render: function() {
    return (
      <div className="col-md-12 header">
        <div className="col-md-4 text-left"><Link to="/"><img src="/css/img/icon.png" /> REACTDIT</Link></div>
        <div className="col-md-4 text-center"><Link to={this.createNewLink(this.props.forum)}>Create Thread</Link></div>
        <div className="col-md-4 text-right"><UserBox username="Anonymous" /></div>
      </div>
    );
  }
});

module.exports = Header;
