var React = require('react');

var Book = React.createClass({
  render : function(){
    return(
      <div>{this.props.title}</div>
    )
  }
});

module.exports = Book;
