var threadReducer = require('../../src/js/reducers/threadReducer.js');
var expect = require('chai').expect;

describe('thread reducer', function() {
  var initialState = {
    thread: [],
    loading: false,
    loaded: false,
    error: null
  };

  it('should return initial state', function() {
    expect(threadReducer(undefined, {})).to.eql(initialState);
  });

  it('should set loading flag to true', function() {
    var newState = Object.assign({}, initialState, {
      loading: true
    });

    expect(threadReducer(undefined, {type: 'FETCH_THREAD_PENDING'})).to.eql(newState);
  });

  it('should set loading to false, loaded to true, and return the payload', function() {
    var newState = Object.assign({}, initialState, {
      thread: 'test',
      loading: false,
      loaded: true
    });

     expect(threadReducer(undefined, {type: 'FETCH_THREAD_FULFILLED', payload: {data: 'test'}})).to.eql(newState);
  });

  it('should set loading to false, and return error', function() {
    var newState = Object.assign({}, initialState, {
      error: 'test',
      loading: false
    });

    expect(threadReducer(undefined, {type: 'FETCH_THREAD_REJECTED', payload: {data: 'test'}})).to.eql(newState);
  });
});
