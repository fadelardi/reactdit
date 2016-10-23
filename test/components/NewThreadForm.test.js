var React = require('react');
var enzyme = require('enzyme');
var expect = require('chai').expect;
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var render = enzyme.render;
var sinon = require('sinon');

var NewThreadForm = require('../../src/js/components/NewThreadForm');
var ForumSelector = require('../../src/js/components/ForumSelector');

describe('NewThreadForm component', function() {
	var callback = sinon.spy();
	var wrapper = shallow(<NewThreadForm handleSubmit={callback} />);
	var e = {
		preventDefault: function() {
			return true;
		},
		target: {
			title: { value: 'test'},
			forum: { value: 1 },
			content: { value: 'test'},
			url: {value: 'test'}
		}
	}

	it('should find submit, click and fire callback', function() {
		expect(wrapper.find('#submit').length).to.equal(1);
		wrapper.find('form').simulate('submit', e);
		expect(callback.called).to.equal(true);
	});

	it('should not call submit callback due to missing title', function() {
		var currentCallCount = callback.calledCount;
		expect(wrapper.find('#submit').length).to.equal(1);

		e.target.title.value = '';
		wrapper.find('form').simulate('submit', e);
		expect(callback.calledCount).to.equal(currentCallCount);
		e.target.title.value = 'test';
	});

	it('should not call submit callback due to missing content', function() {
		var currentCallCount = callback.calledCount;
		expect(wrapper.find('#submit').length).to.equal(1);

		e.target.content.value = '';
		wrapper.find('form').simulate('submit', e);
		expect(callback.calledCount).to.equal(currentCallCount);
		e.target.content.value = 'test';
	});

	it('should not call submit callback due to missing content', function() {
		var currentCallCount = callback.calledCount;
		expect(wrapper.find('#submit').length).to.equal(1);

		e.target.forum.value = '';
		wrapper.find('form').simulate('submit', e);
		expect(callback.calledCount).to.equal(currentCallCount);
		e.target.forum.value = 'test';
	});

	it('should find a hidden forum field', function() {
		expect(wrapper.find(ForumSelector).length).to.equal(1);
	});


	it('should find an explicit forum field', function() {
		var wrapper2 = shallow(<NewThreadForm forum="1" />);
		expect(wrapper2.find('#forum').prop('type')).to.equal('hidden');
	});

	it('should find the appropiate fields: title, content and url', function() {
		expect(wrapper.find('#title').length).to.equal(1);
		expect(wrapper.find('#content').length).to.equal(1);
		expect(wrapper.find('#url').length).to.equal(1);
	});


});
