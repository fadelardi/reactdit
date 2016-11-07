var React = require('react');
var Header = require('../components/Header');
var connect = require('react-redux').connect;

var mapStateToProps = function(store) {
  return {
    user: store.user.user
  };
};

module.exports.UserPage = React.createClass({
  render: function() {
    return (
      <div>
        <Header user={this.props.user} />
        <div className="container-fluid col-md-10 col-md-offset-1 content userPage">
          <h3>{this.props.user.name}</h3>
          <div>Some user stats here</div>
        </div>
      </div>
    );
  }
});

module.exports.default = connect(mapStateToProps)(this.UserPage);
