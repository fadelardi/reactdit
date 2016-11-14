var React = require('react');

var ThreadDetail = React.createClass({
  renderText: function(content) {
    return (
      <div className="text">{content}</div>
    );
  },

  renderImage: function(content) {
    return (
      <center><img id="threadImg" src={content} alt="" /></center>
    );
  },

  renderLink: function() {
    return;
  },
  // render content based on type of thread
  render: function() {
    var content = this.props.thread.content;
    var title = this.props.thread.title;
    var type = this.props.thread.type;
    var contentElement;

    switch(type) {
      case 'Image':
        contentElement = this.renderImage(content);
        break;
      case 'Link':
        contentElement = this.renderLink(content);
        break;
      default:
        contentElement = this.renderText(content);
    }

    return(
      <div className="threadDetail">
        <div className="title">{title}</div>
        {contentElement}
      </div>
    );
  }
});

module.exports = ThreadDetail;
