var React = require('react');

var ThreadDetail = React.createClass({
  render: function() {
    return(
      <div className="threadDetail">
        {this.props.thread.content}
      </div>
    );
  }
});

module.exports = ThreadDetail;
