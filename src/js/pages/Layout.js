var React = require('react');
var Header = require('../components/Header.js');
var ThreadList = require('../components/ThreadList.js');

var data = require('../mock_data.js');

var Layout = React.createClass({
  render: function() {
    return (
      <div className="container header">
        <Header />
        <ThreadList data={data} />
      </div>
    );
  }
});

module.exports = Layout;
