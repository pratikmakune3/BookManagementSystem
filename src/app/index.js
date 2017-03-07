var React = require('react');
var ReactDOM = require('react-dom');
import _ from 'lodash';
var CategoryBooksList = require('./CategoryBooksList');
var request = require('superagent');

// var data = [
//   {title: "a", status: "finished_reading"},
//   {title: "b", status: "want_to_read"},
//   {title: "c", status: "currently_reading"},
//   {title: "e", status: "finished_reading"},
//   {title: "f", status: "dont_want_read"},
// ];
// var data;
// request
//    .get('http://127.0.0.1:8000/books/')
//    .end(function(err, res){
//       data = res.body;
//       console.log('data', data);
//    });

var ManageBooks = React.createClass({

    getInitialState: function(){
      return {data: {}}
    },

   componentDidMount: function(){
     var self = this;
     request
        .get('http://127.0.0.1:8000/books/')
        .end(function(err, res){
           var data = res.body;
           self.setState({data: data});
        });
   },

   getBooks: function() {
     if(this.state.data) {
       var status_books_dict = _.groupBy(this.state.data, 'status');
       var category_list = _.map(status_books_dict, function(filtered_books, key){
         return <CategoryBooksList books={filtered_books} status={key} key={key} />
       })
       return category_list;
     }
    //  this.setState({category_list: category_list});
   },

     render : function(){
    return(
      <div>
      {this.getBooks()}
      </div>
    )
  },
});

ReactDOM.render(<ManageBooks />, document.getElementById('wrapper'));
