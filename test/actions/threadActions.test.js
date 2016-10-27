var configureMockStore = require('redux-mock-store').default;
var promise = require('redux-promise-middleware').default;
var thunk = require('redux-thunk').default;
var mockStore = configureMockStore([promise(), thunk]);
var moxios = require('moxios');
var expect = require('chai').expect;

var threadActions = require('../../src/js/actions/threadActions.js');

describe('thread actions', function() {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });


  describe('getThread', function() {
    var store = mockStore({threads: []});
    it('will get a pending & successful response', function() {
      var mockResponse = [
        {type: 'FETCH_THREAD_PENDING'},
        {type: 'FETCH_THREAD_FULFILLED', payload: {data: []}}
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(threadActions.getThread()).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
      });
    });
  });


  describe('getThreadList', function() {
    it('will get no threads', function() {
      var store = mockStore({threads: []});
      var mockResponse = [
          {type: 'FETCH_THREADS_PENDING'},
          {type: 'FETCH_THREADS_FULFILLED', payload: { data: [] }}
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(threadActions.getThreadList()).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
      });
    });
  });

  describe('addThread', function() {
    it('will return a successful response type', function() {
      var store = mockStore({threads: []});
      var mockResponse = [
          {type: 'ADD_THREAD_PENDING'},
          {type: 'ADD_THREAD_FULFILLED', payload: { data: [] }}
      ];

      moxios.wait(function() {
        var request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: []
        });
      });

      return store.dispatch(threadActions.addThread([], [])).then(function() {
        expect(store.getActions()[0].type).to.equal(mockResponse[0].type);
        expect(store.getActions()[1].type).to.equal(mockResponse[1].type);
        expect(store.getActions()[1].payload.data).to.eql(mockResponse[1].payload.data);
      });

    });
  });
});
