var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;

var ForumSelector = require('../../src/js/components/ForumSelector');

describe('<ForumSelector />', function() {
  var forumArray = [];
  it('should only find the default option element', function() {
    var wrapper = shallow(<ForumSelector forums={forumArray} />);
    expect(wrapper.find('option').length).to.equal(1);
  });

  it('should find the opions passed as prop', function() {
    forumArray.push({id: 1, name: 'Forum 1'});
    var wrapper = shallow(<ForumSelector forums={forumArray} />);
    expect(wrapper.find('option').length).to.equal(2);
    expect(wrapper.text()).to.contain('Forum 1');
  });
});
