var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Provider = require('react-redux').Provider;
var Store = require('./store');

//Containers
var IndexPage = require('./containers/IndexPage');
var ThreadPage = require('./containers/ThreadPage');
var UserPage = require('./containers/UserPage');

var app = document.getElementById('app');

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={IndexPage}>
        <Route path="/f/:forum" component={IndexPage} />
      </Route>
      <Route path="/t/:id" component={ThreadPage} />
      <Route path="/u/:username" component={UserPage} />
    </Router>
  </Provider>,
  app);
