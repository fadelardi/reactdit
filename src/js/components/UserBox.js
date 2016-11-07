var React = require('react');
var UserBox = React.createClass({
  render: function() {
    return (
      <div className="userBox">
        <i className="fa fa-user" aria-hidden="true"></i> {this.props.username}
      </div>
    );
  }
});

module.exports = UserBox;
