var React = require('react');
var connect = require('react-redux').connect;
var Header = require('../components/Header');
var NewThreadForm = require('../components/NewThreadForm');
var forumActions = require('../actions/forumActions');
var withRouter = require('react-router').withRouter;


var NewThreadPage = withRouter(React.createClass({
  handleSubmit: function(form) {
      form.uid = 1;
      this.props.dispatch(forumActions.addThread(form, this.props.router));
  },

  render: function() {
    console.log(this.props.params)
    return (
      <div className="container header">
        <Header />
        <NewThreadForm handleSubmit={this.handleSubmit} forum={this.props.params.forum} />
      </div>
    );
  }
}));

module.exports = connect()(NewThreadPage);
