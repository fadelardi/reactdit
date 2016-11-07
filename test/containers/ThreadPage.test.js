var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var sinon = require('sinon');

var user = require('../../src/js/config').ANON_USER;
var ThreadPage = require('../../src/js/containers/ThreadPage').ThreadPage;
var Header = require('../../src/js/components/Header');
var ThreadDetail = require('../../src/js/components/ThreadDetail');
var CommentList = require('../../src/js/components/CommentList');
var AddComment = require('../../src/js/containers/AddComment').default;
var threadActions = require('../../src/js/actions/threadActions');
var commentActions = require('../../src/js/actions/commentActions');

describe('<ThreadPage />', function() {
  var params = {};
  var dispatch = function() {};
  var getCommentList = sinon.spy(commentActions, 'getCommentList');
  var getThread = sinon.spy(threadActions, 'getThread');
  var wrapper = shallow(<ThreadPage params={params} dispatch={dispatch} user={user} />);

  it('should find <Header />', function() {
    expect(wrapper.find(Header).length).to.equal(1);
  });

  it('should find </ThreadDetail />', function() {
    expect(wrapper.find(ThreadDetail).length).to.equal(1);
  });

  it('should find <CommentList />', function() {
    expect(wrapper.find(CommentList).length).to.equal(1);
  });

  it('should find <AddComment />', function() {
    expect(wrapper.find(AddComment).length).to.equal(1);
  });

  it('should fire getCommentList and getThread', function() {
    expect(getCommentList.called).to.equal(true);
    expect(getThread.called).to.equal(true);
  });
});
