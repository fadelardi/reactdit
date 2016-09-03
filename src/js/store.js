var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var logger = require('redux-logger');
var rootReducer = require('./reducers');
var middleware = applyMiddleware(logger());


module.exports = createStore(rootReducer, middleware);
