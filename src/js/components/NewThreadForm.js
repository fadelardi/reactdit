var React = require('react');

var NewThreadForm = React.createClass({
  getInitialState: function() {
    return {error: false};
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
      url: form.url.value
    };

    this.props.handleSubmit(values);
  },

  validate: function(form) {
    return typeof form != 'undefined' &&
      typeof form.title.value != 'undefined' && form.title.value != '' &&
      typeof form.forum.value != 'undefined' && form.forum.value != '' &&
      (typeof form.content.value != 'undefined' && form.content.value != '' ||
      typeof form.url.value != 'undefined' && form.url.value != '');
  },

  forumField: function (forum) {
    if (typeof forum == 'undefined') {
      return (
        <div className="form-group">
          <label htmlFor="forum">Forum (*)</label>
          <input className="form-control" name="forum" id="forum" type="text" required />
        </div>
      );
    } else {
      return (
        <input type="hidden" name="forum" id="forum" value={this.props.forum} />
      );
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error &&
            <div>The form contains some errors. Make sure all fields with a (*) are filled.</div>
          }
          <div className="form-group">
            <label htmlFor="title">Title (*)</label>
            <input className="form-control" name="title" id="title" type="text" required />
          </div>
          {this.forumField(this.props.forum)}
          <div className="form-group">
            <label htmlFor="content">Content (*)</label>
            <textarea className="form-control" name="content" id="content" required />
          </div>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input className="form-control" name="url" id="url" type="text" />
          </div>
          <input type="submit" id="submit" className="btn btn-default" />
        </form>
      </div>
    );
  }
});

module.exports = NewThreadForm;
