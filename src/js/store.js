var redux = require('redux');
var createStore = redux.createStore;

var applyMiddleware = redux.applyMiddleware;
var logger = require('redux-logger');
var promise = require('redux-promise-middleware').default;

var rootReducer = require('./reducers');
var middleware = applyMiddleware(logger(), promise());


module.exports = createStore(rootReducer, middleware);
