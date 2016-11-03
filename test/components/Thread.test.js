var THREAD_TYPE_LINK = require('../../src/js/config').THREAD_TYPE_LINK;
var THREAD_TYPE_TEXT = require('../../src/js/config').THREAD_TYPE_TEXT;
var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var render = enzyme.render;
var moment = require('moment');

var Thread = require('../../src/js/components/Thread.js');
var Link = require('react-router').Link;

describe('<Thread />', function() {
  var wrapper = render(<Thread totalComments="5" title="topkek" type={THREAD_TYPE_LINK} timestring={moment()} author="test" forum="testforum" />);

  it('contains text "5 comment(s)"', function() {
    expect(wrapper.text()).to.contain('5 comment(s)');
  });

  it('contains text "submitted date by test to testforum"', function() {
    expect(wrapper.text()).to.contain('submitted a few seconds ago by test to testforum');
  });

  it('contains text "submitted date by test to testforum"', function() {
    expect(wrapper.text()).to.contain('submitted a few seconds ago by test to testforum');
  });

  it('contains text "topkek"', function() {
    expect(wrapper.text()).to.contain('topkek');
  });

  it('is wrapped in an <li>', function() {
    expect(wrapper.find('li').length).to.equal(1);
  });

  it('has 3 main divs', function() {
    expect(wrapper.find('div').length).to.equal(3);
  });

  it('should find an a due to being a type link', function() {
    expect(wrapper.find('#link').length).to.equal(1);
  });

  it('should not find an anchor with id link due to its type', function() {
    var wrapper2 = render(<Thread totalComments="5" title="topkek" type={THREAD_TYPE_TEXT} timestring={moment()} author="test" forum="testforum" />);
    expect(wrapper2.find('#link').length).to.equal(0);
  });
});
