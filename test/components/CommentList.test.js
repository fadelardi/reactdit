var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var CommentList = require('../../src/js/components/CommentList.js');
var Comment = require('../../src/js/components/Comment.js');

describe('<CommentList />', function() {
  var comments = [
    {id: 1, pk_threads_id: '', author: '', timestring: '', replies: []},
    {id: 2, pk_threads_id: '', author:'', timestring: '', replies: []},
    {id: 3, pk_threads_id: '', author:'', timestring: '', replies: []}
  ];

  var wrapper = shallow(<CommentList comments={comments} loaded={true} />);

  it('will find 3 Comment components:', function() {
    expect(wrapper.find(Comment).length).to.equal(3);
  });

  it('will find class comments', function() {
    expect(wrapper.find('.comments').length).to.equal(1);
  });

  var wrapper2 = shallow(<CommentList comments={comments} loading={true} />);

  it('will find class loading', function() {
    expect(wrapper2.find('.loading').length).to.equal(1);
  });

  it('will find loading text', function() {
    expect(wrapper2.text()).contains('Loading...');
  });

  var wrapper3 = shallow(<CommentList comments={comments} error={true} />);

  it('will find class error', function() {
    expect(wrapper3.find('.error').length).to.equal(1);
  });

  it('will find an error message', function() {
    expect(wrapper3.text()).contains('could not be loaded');
  });
});
