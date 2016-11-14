var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var NewThreadForm = require('../components/NewThreadForm');
var forumActions = require('../actions/forumActions');
var threadActions = require('../actions/threadActions');
var withRouter = require('react-router').withRouter;

var mapStateToProps = function(store) {
  return {
    // current user
    user: store.user.user,
    // list of forums
    forumList: store.forumList.forums
  };
};
// naked component
module.exports.NewThreadPage = React.createClass({
  displayName: 'NewThreadPage',
  // on mount, get forum list
  componentDidMount: function() {
    if (typeof this.props.params.forum == 'undefined') {
      this.props.dispatch(forumActions.getForums());
    }
  },

  handleSubmit: function(form) {
      form.uid = this.props.user.id;
      this.props.dispatch(threadActions.addThread(form, this.props.router));
  },

  render: function() {
    return (
      <div>
        <Header user={this.props.user} />
        <NewThreadForm handleSubmit={this.handleSubmit} forum={this.props.params.forum} forums={this.props.forumList} />
      </div>
    );
  }
});
// connected component
module.exports.default = connect(mapStateToProps)(withRouter(this.NewThreadPage));
