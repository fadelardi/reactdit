var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var ThreadList = require('../../src/js/components/ThreadList');
var Thread = require('../../src/js/components/Thread');

describe('ThreadList component', function() {
  var threads = [{}, {}];
  var wrapper = shallow(<ThreadList threads={threads} />);

  it('should find two Thread components', function() {
    expect(wrapper.find(Thread).length).to.equal(2);
  });
});
