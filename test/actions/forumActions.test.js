var configureMockStore = require('redux-mock-store').default;
var promise = require('redux-promise-middleware').default;
var thunk = require('redux-thunk').default;
var mockStore = configureMockStore([promise(), thunk]);
var moxios = require('moxios');
var expect = require('chai').expect;

var forumActions = require('../../src/js/actions/forumActions');

describe('forum actions', function() {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  describe('getForums', function() {
    //TODO
  });
});
