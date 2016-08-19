var React = require('react');
var Header = require('../components/Header.js');
var ThreadList = require('../components/ThreadList.js');

var Layout = React.createClass({
  render: function() {
    return (
      <div className="container header">
        <Header />
        <ThreadList/>
      </div>
    );
  }
});

module.exports = Layout;
