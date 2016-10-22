var forumReducer = require('../../src/js/reducers/forumReducer.js');
var expect = require('chai').expect;

describe('forum reducer', function() {
  var initialState = {
    threads: [],
    loading: false,
    loaded: false,
    error: false
  };

  it('should return initial state', function() {
    expect(forumReducer(undefined, {})).to.eql(initialState);
  });

  it('should set loading flag to true', function() {
    var newState = Object.assign({}, initialState, {
      loading: true
    });

    expect(forumReducer(undefined, {type: 'FETCH_THREADS_PENDING'})).to.eql(newState);
  });

  it('should set loading to false, loaded to true, and return the payload', function() {
    var newState = Object.assign({}, initialState, {
      threads: 'test',
      loading: false,
      loaded: true
    });

     expect(forumReducer(undefined, {type: 'FETCH_THREADS_FULFILLED', payload: {data: 'test'}})).to.eql(newState);
  });

  it('should set loading to false, and return error', function() {
    var newState = Object.assign({}, initialState, {
      error: true,
      loading: false
    });

    expect(forumReducer(undefined, {type: 'FETCH_THREADS_REJECTED', payload: {data: 'test'}})).to.eql(newState);
  });
});
