var redux = require('redux');
var createStore = redux.createStore;

var applyMiddleware = redux.applyMiddleware;
var logger = require('redux-logger');
var promise = require('redux-promise-middleware').default;
var thunk = require('redux-thunk').default;

var rootReducer = require('./reducers');
var middleware = applyMiddleware(logger(), thunk, promise());


module.exports = createStore(rootReducer, middleware);
