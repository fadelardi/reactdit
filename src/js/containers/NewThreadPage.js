var ANON_ID = require('../config').ANON_ID;
var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var NewThreadForm = require('../components/NewThreadForm');
var forumActions = require('../actions/forumActions');
var threadActions = require('../actions/threadActions');
var withRouter = require('react-router').withRouter;

var mapStateToProps = function(store) {
  return {
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
      form.uid = ANON_ID;
      this.props.dispatch(threadActions.addThread(form, this.props.router));
  },

  render: function() {
    return (
      <div>
        <Header />
        <NewThreadForm handleSubmit={this.handleSubmit} forum={this.props.params.forum} forums={this.props.forumList} />
      </div>
    );
  }
}));

module.exports = connect(mapStateToProps)(NewThreadPage);
