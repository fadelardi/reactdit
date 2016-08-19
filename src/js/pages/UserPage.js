var React = require('react');
var Header = require('../components/Header.js');

var UserPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <div>User detail</div>
      </div>
    );
  }
});

module.exports = UserPage;
