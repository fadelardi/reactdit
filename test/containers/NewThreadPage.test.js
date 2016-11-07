var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var sinon = require('sinon');
var NewThreadPage = require('../../src/js/containers/NewThreadPage').NewThreadPage;
var forumActions = require('../../src/js/actions/forumActions');
var Header = require('../../src/js/components/Header');
var NewThreadForm = require('../../src/js/components/NewThreadForm');

describe('<NewThreadPage />', function() {
  var params = {};
  var user = require('../../src/js/config').ANON_USER;
  var wrapper = shallow(<NewThreadPage params={params} user={user} />);
  var getForums = sinon.spy(forumActions, 'getForums');

  it('should dispatch getForums action as no forum id is present', function() {
    expect(getForums.called).to.equal(true);
  });

  it('should find a <NewThreadForm /> and <Header />', function() {
    expect(wrapper.find(Header).length).to.equal(1);
    expect(wrapper.find(NewThreadForm).length).to.equal(1);
  });
});
