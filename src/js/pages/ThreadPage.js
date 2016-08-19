var React = require('react');
var Header = require('../components/Header.js');

var ThreadPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <div>Thread Detail</div>
      </div>
    );
  }
});

module.exports = ThreadPage;
