var React = require('react');

var ForumSelector = React.createClass({
  render: function(){
    var fora = this.props.fora;
    var forumList = fora.map(function(forum) {
      return(
        <option key={forum.id} value={forum.id}>{forum.name}</option>
      );
    });

    return (
      <select className="form-control" name="forum" id="forum" required>
        <option>Select a forum</option>
        {forumList}
      </select>
    );
  }
});

module.exports = ForumSelector;
