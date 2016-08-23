var React = require('react');
var Header = require('../components/Header.js');
var ThreadList = require('../components/ThreadList.js');

var ThreadStore = require('../stores/ThreadStore.js');

var IndexPage = React.createClass({
  render: function() {
    return (
      <div className="container header">
        <Header />
        <ThreadList data={ThreadStore} />
      </div>
    );
  }
});

module.exports = IndexPage;
