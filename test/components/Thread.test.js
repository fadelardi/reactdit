var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var Thread = require('../../src/js/components/Thread.js');
var Link = require('react-router').Link;


describe('Thread component', function() {
  var wrapper = render(<Thread totalComments="5" title="topkek" timestring="date" author="test" forum="testforum" />);

  it('contains text "5 comment(s)"', function() {
    expect(wrapper.text()).to.contain('5 comment(s)');
  });

  it('contains text "submitted date by test to testforum"', function() {
    expect(wrapper.text()).to.contain('submitted date by test to testforum');
  });

  it('contains text "submitted date by test to testforum"', function() {
    expect(wrapper.text()).to.contain('submitted date by test to testforum');
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
});