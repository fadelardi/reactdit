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
    var store = mockStore({threads: []});
    it('will get a pending and fulfilled response', function() {
      var mockResponse = [
        {type: 'FETCH_FORUMS_PENDING'},
        {type: 'FETCH_FORUMS_FULFILLED', payload: { data: [] }}
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(forumActions.getForums()).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
      });
    });
  });
});
