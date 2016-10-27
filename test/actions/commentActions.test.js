var configureMockStore = require('redux-mock-store').default;
var promise = require('redux-promise-middleware').default;
var thunk = require('redux-thunk').default;
var mockStore = configureMockStore([promise(), thunk]);
var moxios = require('moxios');
var expect = require('chai').expect;

var commentActions = require('../../src/js/actions/commentActions');

describe('comment actions', function() {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  describe('addComment', function() {
    var store = mockStore({threads: []});
    it('will get a pending and fulfilled response, then fetch thread + comments', function() {
      var mockResponse = [
        {type: 'ADD_COMMENT_PENDING'},
        {type: 'ADD_COMMENT_FULFILLED', payload: {data: []}},
        {type: 'FETCH_THREAD_PENDING'},
        {type: 'FETCH_COMMENTS_PENDING'},
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(commentActions.addComment({id: 1})).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
        expect(store.getActions()[2].type).to.equal(mockResponse[2].type);
        expect(store.getActions()[3].type).to.equal(mockResponse[3].type);
      });
    });
  });

  describe('getCommentList', function() {
    var store = mockStore({threads: []});

    it('will get a pending and fulfilled response', function() {
      var mockResponse = [
        {type: 'FETCH_COMMENTS_PENDING'},
        {type: 'FETCH_COMMENTS_FULFILLED', payload: { data: [] }}
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(commentActions.getCommentList(1)).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
      });
    });
  });
});
