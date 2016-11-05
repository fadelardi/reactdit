var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var sinon = require('sinon');
var threadActions = require('../../src/js/actions/threadActions');
var ThreadList = require('../../src/js/components/ThreadList');

var ForumPage = require('../../src/js/containers/ForumPage').ForumPage;

describe('<ForumPage />', function() {
  var threads = [];
  var params = {}
  var dispatch = function() {};
  var getThreadList = sinon.spy(threadActions, 'getThreadList')
  var wrapper = shallow(<ForumPage threads={threads} loading={true} dispatch={dispatch} params={params} />);

  it('should dispatch getThreadList', function() {
    expect(getThreadList.called).to.equal(true);
  });

  it('should find class loading', function() {
    expect(wrapper.find('.loading').length).to.equal(1);
  });

  it('should find class error', function() {
    var wrapper2 = shallow(<ForumPage threads={threads} error={true} dispatch={dispatch} params={params} />);
    expect(wrapper2.find('.error').length).to.equal(1);
  });

  it('should find component <ThreadList /> when loaded is true', function() {
    var wrapper3 = shallow(<ForumPage threads={threads} loaded={true} dispatch={dispatch} params={params} />);
    expect(wrapper3.find(ThreadList).length).to.equal(1);
  });
});
