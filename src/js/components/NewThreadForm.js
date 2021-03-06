var THREAD_TYPES = require('../config').THREAD_TYPES;
var THREAD_TYPE_TEXT = require('../config').THREAD_TYPE_TEXT;
var React = require('react');
var ForumSelector = require('./ForumSelector');

var NewThreadForm = React.createClass({
  // by default type should be text
  getInitialState: function() {
    return {
      error: false,
      type: THREAD_TYPE_TEXT
    };
  },
  // update state when changing type
  handleTypeChange: function(e) {
    this.setState({type: e.target.value});
  },

  onSubmit: function(e) {
    var form, values;

    e.preventDefault();
    this.setState({error: false});

    form = e.target;

    if (!this.validate(form)) {
      this.setState({error: true});
      return;
    }

    values = {
      title: form.title.value,
      fid: form.forum.value,
      content: form.content.value,
      type: form.type.value
    };

    this.props.handleSubmit(values);
  },

  validate: function(form) {
    return typeof form != 'undefined' &&
      typeof form.title.value != 'undefined' && form.title.value != '' &&
      typeof form.forum.value != 'undefined' && form.forum.value != '' &&
      (typeof form.content.value != 'undefined' && form.content.value != '' ||
      typeof form.type.value != 'undefined' && form.type.value != '');
  },
  // generate forum list
  forumField: function (forum) {
    if (typeof forum == 'undefined') {
      return (
        <div className="form-group row">
          <label htmlFor="forum" className="col-sm-2">Forum (*)</label>
          <div className="col-sm-10">
            <ForumSelector forums={this.props.forums} />
          </div>
        </div>
      );
    } else {
      return (
        <input type="hidden" name="forum" id="forum" value={this.props.forum} />
      );
    }
  },

  threadTypeOptions: function() {
    var self = this;
    return THREAD_TYPES.map(function(type) {
      return(
        <label key={type.name} className="radio-inline">
          <input key={type.name} name="type" id="type" type="radio" value={type.name} onChange={self.handleTypeChange} defaultChecked={type.name == THREAD_TYPE_TEXT}  /> <i className={"fa " + type.icon} aria-hidden="true"></i>  {type.name}
        </label>
      );
    });
  },

  render: function() {
    return (
      <div className="container-fluid col-md-10 col-md-offset-1 content newThreadForm">
        <form onSubmit={this.onSubmit}>
          <h3>New Thread</h3>
          {this.state.error &&
            <div className="bg-danger">The form contains some errors. Make sure all fields with a <strong>(*)</strong> are filled.</div>
          }
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="options">Type (*):</label>
            <div className="col-sm-10" id="options">
              {this.threadTypeOptions()}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="title">Title (*)</label>
            <div className="col-sm-10">
              <input className="form-control" name="title" id="title" type="text" required />
            </div>
          </div>
          {this.forumField(this.props.forum)}
          <div className="form-group row">
            <label htmlFor="content" className="col-sm-2">Content (*)</label>
            {this.state.type == 'TXT' &&
              <div className="col-sm-10"><textarea className="form-control" name="content" id="content" required /></div>
            }
            {this.state.type != 'TXT' &&
              <div className="col-sm-10"><input type="text" className="form-control col-sm-10" name="content" id="content" /></div>
            }
          </div>
          <div className="form-group row">
            <div className="col-sm-offset-2 col-sm-10">
              <input type="submit" id="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = NewThreadForm;
