var threadReducer = require('../../src/js/reducers/threadsReducer').threadReducer;
var threadListReducer = require('../../src/js/reducers/threadsReducer').threadListReducer;
var expect = require('chai').expect;

describe('threadsReducer', function() {
  describe('thread', function() {
    var initialState = {
      thread: [],
      loading: false,
      loaded: false,
      error: false
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
        error: true,
        loading: false
      });

      expect(threadReducer(undefined, {type: 'FETCH_THREAD_REJECTED', payload: {data: 'test'}})).to.eql(newState);
    });
  });

  describe('threadList', function() {
    var initialState = {
      threads: [],
      loading: false,
      loaded: false,
      error: false
    };

    it('should return initial state', function() {
      expect(threadListReducer(undefined, {})).to.eql(initialState);
    });

    it('should set loading flag to true', function() {
      var newState = Object.assign({}, initialState, {
        loading: true
      });

      expect(threadListReducer(undefined, {type: 'FETCH_THREADS_PENDING'})).to.eql(newState);
    });

    it('should set loading to false, loaded to true, and return the payload', function() {
      var newState = Object.assign({}, initialState, {
        threads: 'test',
        loading: false,
        loaded: true
      });

       expect(threadListReducer(undefined, {type: 'FETCH_THREADS_FULFILLED', payload: {data: 'test'}})).to.eql(newState);
    });

    it('should set loading to false, and return error', function() {
      var newState = Object.assign({}, initialState, {
        error: true,
        loading: false
      });

      expect(threadListReducer(undefined, {type: 'FETCH_THREADS_REJECTED', payload: {data: 'test'}})).to.eql(newState);
    });
  });
});
