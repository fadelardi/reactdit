var React = require('react');
var Header = require('../components/Header.js');
var ThreadList = require('../components/ThreadList.js');

var data = require('../mock_data.js');
var threads = data.threads;

var IndexPage = React.createClass({
  render: function() {
    return (
      <div className="container header">
        <Header />
        <ThreadList data={threads} />
      </div>
    );
  }
});

module.exports = IndexPage;
