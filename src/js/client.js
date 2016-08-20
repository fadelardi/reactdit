var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

//Pages
var IndexPage = require('./pages/IndexPage.js');
var ThreadPage = require('./pages/ThreadPage.js');
var UserPage = require('./pages/UserPage.js');

var app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage} />
    <Route path="/thread/:threadId" component={ThreadPage} />
    <Route path="/user" component={UserPage} />
  </Router>,
  app);
