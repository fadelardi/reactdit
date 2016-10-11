var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var UserBox = require('../../src/js/components//UserBox.js');

describe('UserBox component', function() {
  var wrapper = render(<UserBox username="fakeUser" />);

  it('should print the given username', function() {
    expect(wrapper.text()).to.contain('fakeUser');
  });

  it('should find the class "userBox"', function() {
    expect(wrapper.find('.userBox')).to.have.length(1);
  });
});
