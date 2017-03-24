var React = require('react');
var request = require('superagent');

var bookStyle = {
  padding: '5px',
  border: 'groove',
  margin: '2px',
}

var Book = React.createClass({

  handleDelete: function(){
    request
      .del('http://127.0.0.1:8000/books/')
      .query({id: this.props.id})
      .end(function(err, res){
        this.props.handleDelete();
      });
  },

  render : function(){
    return(
      <div style={bookStyle}>
        {this.props.name}
        <span onClick = {this.handleDelete}> x </span>
      </div>
    )
  }
});

module.exports = Book;
