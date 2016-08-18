var React = require('react');
var ReactDOM = require('react-dom');

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
});
const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
