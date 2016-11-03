var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;

var ThreadList = require('../../src/js/components/ThreadList');
var Thread = require('../../src/js/components/Thread');

describe('<ThreadList />', function() {
  var threads = [{id:1}, {id:2}];
  var wrapper = shallow(<ThreadList threads={threads} />);

  it('should find two Thread components', function() {
    expect(wrapper.find(Thread).length).to.equal(2);
  });
});
