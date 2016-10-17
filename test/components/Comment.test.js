var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var Comment = require('../../src/js/components/Comment');

describe('Comment component', function() {
  var replies = [
    {id: 1},
    {id: 2},
    {id: 3}
  ];
  var wrapper = shallow(<Comment replies={replies} />);

  it('expect to find basic structure', function() {
    expect(wrapper.find('.comment').length).to.equal(1);
    expect(wrapper.find('.body').length).to.equal(1);
    expect(wrapper.find('.options').length).to.equal(1);
    expect(wrapper.find('.newReply').length).to.equal(1);
    expect(wrapper.find('.replies').length).to.equal(1);
  });

  it('has three instances of itself inside', function() {
    expect(wrapper.find(Comment).length).to.equal(3);
  });

  it('has showReply flag as false', function() {
    expect(wrapper.state().showReply).to.equal(false);
  });
});
