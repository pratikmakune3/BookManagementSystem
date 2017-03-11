var React = require('react');

var bookStyle = {
  padding: '5px',
  border: 'groove',
  margin: '2px',
}

var Book = React.createClass({
  render : function(){
    return(
      <div style={bookStyle}>{this.props.name}</div>
    )
  }
});

module.exports = Book;
