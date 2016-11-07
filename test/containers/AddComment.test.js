var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var sinon = require('sinon');

var AddComment = require('../../src/js/containers/AddComment').AddComment;

describe('<AddComment />', function() {
  var dispatch = sinon.spy();
  var wrapper = shallow(<AddComment dispatch={dispatch} threadId={0} uid={0} />);
  var e = {
    preventDefault: function() {
      return true;
    },
    target: {
      comment: { value: 'test'},
    }
  };

  it('should not dispatch addComment action due to missing comment value', function() {
    e.target.comment.value = '';
    wrapper.find('form').simulate('submit', e);
    expect(dispatch.called).to.equal(false);
  });

  
});
