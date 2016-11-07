var forumListReducer = require('../../src/js/reducers/forumsReducer').forumListReducer;
var expect = require('chai').expect;

describe('forumsReducer', function() {
  describe('forumListReducer', function() {
    var initialState = {
      forums: [],
      loading: false,
      loaded: false,
      error: false
    };

    it('should return initial state', function() {
      expect(forumListReducer(undefined, {})).to.eql(initialState);
    });

    it('should set loading flag to true', function() {
      var newState = Object.assign({}, initialState, {
        loading: true
      });

      expect(forumListReducer(undefined, {type: 'FETCH_FORUMS_PENDING'})).to.eql(newState);
    });

    it('should set loading to false, loaded to true, and return the payload', function() {
      var newState = Object.assign({}, initialState, {
        forums: 'test',
        loading: false,
        loaded: true
      });

       expect(forumListReducer(undefined, {type: 'FETCH_FORUMS_FULFILLED', payload: {data: 'test'}})).to.eql(newState);
    });

    it('should set loading to false, and return error', function() {
      var newState = Object.assign({}, initialState, {
        error: true,
        loading: false
      });

      expect(forumListReducer(undefined, {type: 'FETCH_FORUMS_REJECTED', payload: {data: 'test'}})).to.eql(newState);
    });
  });
});
