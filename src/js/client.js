var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Provider = require('react-redux').Provider;
var Store = require('./store');

//Containers
var ForumPage = require('./containers/ForumPage').default;
var ThreadPage = require('./containers/ThreadPage');
var UserPage = require('./containers/UserPage');
var NewThreadPage = require('./containers/NewThreadPage').default;

var app = document.getElementById('app');

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={ForumPage}>
        <Route path="/f/:forum" component={ForumPage} />
      </Route>
      <Route path="/new" component={NewThreadPage}>
        <Route path="/f/:forum/new" component={NewThreadPage} />
      </Route>
      <Route path="/t/:id" component={ThreadPage} />
      <Route path="/u/:username" component={UserPage} />
    </Router>
  </Provider>,
  app);
