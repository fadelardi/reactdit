var React = require('react');

var NewThreadForm = React.createClass({
  onSubmit: function(e) {
    var form, values;

    e.preventDefault();
    form = e.target;
    values = {
      title: form.title.value,
      fid: form.forum.value,
      content: form.content.value,
      url: form.url.value
    };

    this.props.handleSubmit(values);
  },

  forumField: function (forum) {
    if (typeof forum == 'undefined') {
      return (
        <div className="form-group">
          <label htmlFor="forum">Forum</label>
          <input className="form-control" name="forum" id="forum" type="text" />
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
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" name="title" id="title" type="text" />
          </div>
          {this.forumField(this.props.forum)}
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" name="content" id="content" />
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
