var React = require('react');
import _ from 'lodash';
var Book = require('./Book');

var CategoryBooksList = React.createClass({
  render: function(){
          var list_of_books = _.map(this.props.books, function(book,key){
      return (
        <Book title={book.title} status={book.status} key={key}/>
      )
    })

    return (
      <div>
        <strong>{this.props.status}</strong>
        {list_of_books}
      </div>
    );

  }
});

module.exports = CategoryBooksList;
