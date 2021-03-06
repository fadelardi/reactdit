var React = require('react');

var ForumSelector = React.createClass({
  render: function(){
    var forums = this.props.forums;
    var forumList = forums.map(function(forum) {
      return(
        <option key={forum.id} value={forum.id}>{forum.name}</option>
      );
    });

    return (
      <select className="form-control" name="forum" id="forum" required>
        <option value="">Select a forum</option>
        {forumList}
      </select>
    );
  }
});

module.exports = ForumSelector;
