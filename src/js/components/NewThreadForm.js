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
        <div className="form-group">
          <label htmlFor="forum">Forum (*)</label>
          <ForumSelector forums={this.props.forums} />
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
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error &&
            <div>The form contains some errors. Make sure all fields with a (*) are filled.</div>
          }
          <div className="form-group">
            <label htmlFor="options">Type (*):</label>
            <div id="options">
              {threadTypesOptions}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title (*)</label>
            <input className="form-control" name="title" id="title" type="text" required />
          </div>
          {this.forumField(this.props.forum)}
          <div className="form-group">
            <label htmlFor="content">Content (*)</label>
            {this.state.type == 'TXT' &&
              <textarea className="form-control" name="content" id="content" required />
            }
            {this.state.type != 'TXT' &&
              <input type="text" className="form-control" name="content" id="content" />
            }
          </div>
          <input type="submit" id="submit" className="btn btn-default" />
        </form>
      </div>
    );
  }
});

module.exports = NewThreadForm;
