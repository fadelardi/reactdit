var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var render = enzyme.render;

var Header = require('../../src/js/components/Header.js');
var UserBox = require('../../src/js/components/UserBox');
var Link = require('react-router').Link;

describe('<Header />', function() {
  var wrapper = render(<Header forum="1" />);

  it('contains an index link', function() {
    expect(wrapper.text()).to.contain('REACTDIT');
  });

  it('contains a create thread link', function() {
    expect(wrapper.text()).to.contain('Create Thread');
  });

  it('contains an UserBox component', function() {
    var wrapper = shallow(<Header forum="1" />);
    expect(wrapper.find(UserBox).length).to.equal(1);
  });

  it('contains 2 Link components', function() {
    var wrapper = shallow(<Header forum="1" />);
    expect(wrapper.find(Link).length).to.equal(2);
  });
});
