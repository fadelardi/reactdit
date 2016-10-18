var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var UserPage = require('../../src/js/containers/UserPage');
var Header = require('../../src/js/components/Header');

describe('UserPage container', function() {
  wrapper = shallow(<UserPage />);
  it('will find proper text', function() {
    expect(wrapper.text()).contains('User detail');
  });

  it('will find a Header component', function() {
    expect(wrapper.find(Header).length).to.equal(1);
  });
});
