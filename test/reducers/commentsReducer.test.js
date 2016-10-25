var commentsReducer = require('../../src/js/reducers/commentsReducer');
var expect = require('chai').expect;

describe('commentsReducer', function() {
  var initialState = {
    comments: [],
    loading: false,
    loaded: false,
    error: false
  };

  it('should return initial state', function() {
    expect(commentsReducer(undefined, {})).to.eql(initialState);
  });

  it('should set loading to true', function() {
    var newState = Object.assign({}, initialState, { loading: true });
    expect(commentsReducer(undefined, {type: 'FETCH_COMMENTS_PENDING'})).to.eql(newState);
  });

  it('should set loading to false, loaded to true', function() {
    var newState = Object.assign({}, initialState, { loading: false, loaded: true });
    expect(commentsReducer(undefined, {type: 'FETCH_COMMENTS_FULFILLED', payload: {data: []}})).to.eql(newState);
  });

  it('should set error to true', function() {
    var newState = Object.assign({}, initialState, { error: true });
    expect(commentsReducer(undefined, {type: 'FETCH_COMMENTS_REJECTED'})).to.eql(newState);
  });
});
