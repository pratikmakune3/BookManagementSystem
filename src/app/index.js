var React = require('react');
var ReactDOM = require('react-dom');
import _ from 'lodash';
var CategoryBooksList = require('./CategoryBooksList');

var data = [
  {
    title: "a",
    status: "finished_reading"
  },
  {
    title: "b",
    status: "want_to_read"
  },

  {
    title: "c",
    status: "currently_reading"
  },

  {
    title: "e",
    status: "finished_reading"
  },

];

var ManageBooks = React.createClass({
  render : function(){
    var status_books_dict = _.groupBy(data, 'status');
    console.log(status_books_dict);
    var category_list = _.map(status_books_dict, function(filtered_books, key){
      console.log(key +" "+ filtered_books);
      return <CategoryBooksList books={filtered_books} status={key} key={key} />
    })

    return(
      <div>
        {category_list}
      </div>
    )
  }
});

ReactDOM.render(<ManageBooks data={data}/>, document.getElementById('wrapper'));
