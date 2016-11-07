var user = require('../../src/js/config').ANON_USER;
var React = require('react');
var expect = require('chai').expect;
var shallow = require('enzyme').shallow;

var UserPage = require('../../src/js/containers/UserPage').UserPage;

describe('<UserPage />', function() {
  var wrapper = shallow(<UserPage user={user} />);

  it('should find the username passed', function() {
    expect(wrapper.text()).contains(user.name);
  });
});
