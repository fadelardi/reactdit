var React = require('react');
var UserBox = require('./UserBox');

var Header = React.createClass({
  render: function() {
    return (
      <div className="col-md-12 header">
        <div className="col-md-8">This is the general header</div>
        <div className="col-md-4"><UserBox /></div>
      </div>
    );
  }
});

module.exports = Header;
