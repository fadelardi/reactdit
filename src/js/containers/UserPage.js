var React = require('react');
var Header = require('../components/Header');
var connect = require('react-redux').connect;

var mapStateToProps = function(store) {
  return {
    // current user
    user: store.user.user
  };
};
// naked component
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
// connected component
module.exports.default = connect(mapStateToProps)(this.UserPage);
