var React = require('react');
var UserBox = React.createClass({
  render: function() {
    return (
      <div className="userBox">
        {this.props.username}
      </div>
    );
  }
});

module.exports = UserBox;
