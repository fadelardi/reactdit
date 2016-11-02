var threadTypes = require('../config').THREAD_TYPES;
var React = require('react');
var ForumSelector = require('./ForumSelector');

var NewThreadForm = React.createClass({
  getInitialState: function() {
    return {
      error: false,
      type: 'TXT'
    };
  },

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

  render: function() {
    var self = this;
    var threadTypesOptions = threadTypes.map(function(type) {
      return(
        <label key={type.id} className="radio-inline">
          <input key={type.id} name="type" type="radio" value={type.id} onChange={self.handleTypeChange} defaultChecked={type.id == 'TXT'}  /> {type.desc}
        </label>
      );
    });

    return (
      <div className="container-fluid col-md-10 col-md-offset-1 newThreadForm">
        <form onSubmit={this.onSubmit}>
          {this.state.error &&
            <div>The form contains some errors. Make sure all fields with a (*) are filled.</div>
          }
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="options">Type (*):</label>
            <div className="col-sm-10" id="options">
              {threadTypesOptions}
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
