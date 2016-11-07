var userReducer = require('../../src/js/reducers/userReducer').userReducer;
var expect = require('chai').expect;

describe('userReducer reducer', function() {
  var initialState = {
    user: require('../../src/js/config').ANON_USER
  };

  it('should return initialState', function() {
    expect(userReducer(undefined, {})).to.eql(initialState);
  });
});
