var React = require('react');

var Book = React.createClass({
  render : function(){
    return(
      <div>{this.props.name}</div>
    )
  }
});

module.exports = Book;
