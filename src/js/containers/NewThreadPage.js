var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var NewThreadForm = require('../components/NewThreadForm');
var forumActions = require('../actions/forumActions');
var threadActions = require('../actions/threadActions');
var withRouter = require('react-router').withRouter;

var mapStateToProps = function(store) {
  return {
    user: store.user.user,
    forumList: store.forumList.forums
  };
};

var NewThreadPage = withRouter(React.createClass({
  displayName: 'NewThreadPage',

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
}));

module.exports = connect(mapStateToProps)(NewThreadPage);
