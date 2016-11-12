var THREAD_TYPE_TEXT = require('../../src/js/config').THREAD_TYPE_TEXT;
var THREAD_TYPE_IMAGE = require('../../src/js/config').THREAD_TYPE_IMAGE;
var React = require('react');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;

var ThreadDetail = require('../../src/js/components/ThreadDetail');

describe('<ThreadDetail />', function() {
  var thread = {
    type: THREAD_TYPE_TEXT,
    title: 'Title',
    content: 'Content'
  };

  var wrapper = shallow(<ThreadDetail thread={thread} />);

  it('should find content passed to it as is', function() {
    expect(wrapper.text()).to.contain('Content');
  });

  it('should find title passed to it', function() {
    expect(wrapper.text()).to.contain('Title');
  });

  it('should find id #threadImg', function() {
    thread.type = THREAD_TYPE_IMAGE;
    var wrapper2 = shallow(<ThreadDetail thread={thread} />);
    expect(wrapper2.find('#threadImg').length).to.equal(1);
  });
});
