var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;

var CommentList = require('../../src/js/components/CommentList.js');
var Comment = require('../../src/js/components/Comment.js');

describe('CommentList component', function() {
  var comments = [
    {id: 1, pk_threads_id: '', author: '', timestring: '', replies: []},
    {id: 2, pk_threads_id: '', author:'', timestring: '', replies: []},
    {id: 3, pk_threads_id: '', author:'', timestring: '', replies: []}
  ];

  var wrapper = shallow(<CommentList comments={comments} />);

  it('will find 3 Comment components:', function() {
    expect(wrapper.find(Comment).length).to.equal(3);
  });

  it('will find class commentList', function() {
    expect(wrapper.find('.commentList').length).to.equal(1);
  });
});
