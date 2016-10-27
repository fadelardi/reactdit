var commentListReducer = require('../../src/js/reducers/commentsReducer').commentListReducer;
var newCommentReducer = require('../../src/js/reducers/commentsReducer').newCommentReducer;

var expect = require('chai').expect;

describe('commentsReducer', function() {
  describe('commentList', function() {
    var initialState = {
      comments: [],
      loading: false,
      loaded: false,
      error: false
    };

    it('should return initial state', function() {
      expect(commentListReducer(undefined, {})).to.eql(initialState);
    });

    it('should set loading to true', function() {
      var newState = Object.assign({}, initialState, { loading: true });
      expect(commentListReducer(undefined, {type: 'FETCH_COMMENTS_PENDING'})).to.eql(newState);
    });

    it('should set loading to false, loaded to true', function() {
      var newState = Object.assign({}, initialState, { loading: false, loaded: true });
      expect(commentListReducer(undefined, {type: 'FETCH_COMMENTS_FULFILLED', payload: {data: []}})).to.eql(newState);
    });

    it('should set error to true', function() {
      var newState = Object.assign({}, initialState, { error: true });
      expect(commentListReducer(undefined, {type: 'FETCH_COMMENTS_REJECTED'})).to.eql(newState);
    });
  });

  describe('newComment', function() {
    var initialState = {
      submitted: false,
      added: false,
      error: false
    };

    it('should return initial state', function() {
      expect(newCommentReducer(undefined, {})).to.eql(initialState);
    });

    it('should set submitted to true', function() {
      var newState = Object.assign({}, initialState, { submitted: true });
      expect(newCommentReducer(undefined, {type: 'ADD_COMMENT_PENDING'})).to.eql(newState);
    });

    it('should set submitted to false, added to true', function() {
      var newState = Object.assign({}, initialState, { submitted: false, added: true });
      expect(newCommentReducer(undefined, {type: 'ADD_COMMENT_FULFILLED'})).to.eql(newState);
    });

    it('should set error to true', function() {
      var newState = Object.assign({}, initialState, { error: true });
      expect(newCommentReducer(undefined, {type: 'ADD_COMMENT_REJECTED'})).to.eql(newState);
    });
  });
});
