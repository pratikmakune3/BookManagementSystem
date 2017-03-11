var React = require('react');
import _ from 'lodash';
var Book = require('./Book');
var request = require('superagent');

var categoryBoxStyle = {
  float: 'left',
  border: 'groove',
  margin: '50px',
  width: '150px',
  padding: '10px',
};

var CategoryBooksList = React.createClass({

      handleSubmit: function(e){
        e.preventDefault();
        var self = this;
        request
          .post('http://localhost:8000/books/')
          .send(
            {
              "name": self.refs.newBook.value,
              "status": self.props.status
            })
          .end(function(err, res){
            if (res.body !== null) {
              self.props.addBook();
            }
          });
      },

      render: function(){
              var list_of_books = _.map(this.props.books, function(book,key){
                return (
                  <Book name={book.name} status={book.status} key={key}/>
                )
              })

      return (
        <div style={categoryBoxStyle}>
          <strong>{this.props.status}</strong>
          <form id = "add-book" placeholder='Add a Book' onSubmit = {this.handleSubmit}>
                <input type = 'text' required ref="newBook"/>
                <input type = 'submit' value = 'Hit me!' />
          </form>
          {list_of_books}
        </div>
      );

      }
});

module.exports = CategoryBooksList;
