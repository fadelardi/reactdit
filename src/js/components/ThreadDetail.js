var React = require('react');

var ThreadDetail = React.createClass({
  renderText: function(content) {
    return content;
  },

  renderImage: function(content) {
    return (
      <center><img id="threadImg" src={content} alt="" /></center>
    );
  },

  renderLink: function() {
    return;
  },

  render: function() {
    var content = this.props.thread.content;
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
        {contentElement}
      </div>
    );
  }
});

module.exports = ThreadDetail;
