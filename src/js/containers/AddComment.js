var React = require('react');
var connect = require('react-redux').connect;


var AddComment = React.createClass({
  handleSubmit: function() {
    console.log('submit post to backend')
  },

  render: function() {
    return (
      <div className="addComment col-md-12">
        <div>Add your comment:</div>
        <textarea id="comment"></textarea>
        <div><button onClick={this.handleSubmit}>Submit Post</button></div>
      </div>
    );
  }
});

module.exports = connect()(AddComment);
