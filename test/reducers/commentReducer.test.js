var commentReducer = require('../../src/js/reducers/commentReducer');
var expect = require('chai').expect;

describe('comment reducer', function() {
  var initialState = {
    submitted: false,
    added: false,
    error: false
  };

  it('should return initial state', function() {
    expect(commentReducer(undefined, {})).to.eql(initialState);
  });

  it('should set submitted to true', function() {
    var newState = Object.assign({}, initialState, { submitted: true });
    expect(commentReducer(undefined, {type: 'ADD_COMMENT_PENDING'})).to.eql(newState);
  });

  it('should set submitted to false, added to true', function() {
    var newState = Object.assign({}, initialState, { submitted: false, added: true });
    expect(commentReducer(undefined, {type: 'ADD_COMMENT_FULFILLED'})).to.eql(newState);
  });

  it('should set error to true', function() {
    var newState = Object.assign({}, initialState, { error: true });
    expect(commentReducer(undefined, {type: 'ADD_COMMENT_REJECTED'})).to.eql(newState);
  });
});
