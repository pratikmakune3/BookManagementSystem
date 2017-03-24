var React = require('react');
var ReactDOM = require('react-dom');
var CategoryBooksList = require('./CategoryBooksList');
var request = require('superagent');

import _ from 'lodash';

var ManageBooks = React.createClass({

      getInitialState: function(){
        return {data: {}}
      },

     componentDidMount: function(){
       var self = this;
       request
          .get('http://localhost:8000/books/')
          .end(function(err, res){
             var data = res.body;
             self.setState({data: data});
          });
     },

     handleBookUpdate: function(){
       var self = this;
       request
       .get('http://localhost:8000/books/')
       .end(function(err, res){
         var data = res.body;
         self.setState({data: data});
       });
     },

     getBooks: function() {
       if(this.state.data) {
         var self = this;
         var status_books_dict = _.groupBy(this.state.data, 'status');
         var category_list = _.map(status_books_dict, function(filtered_books, key){
           return <CategoryBooksList books={filtered_books} status={key} updateBooks={self.handleBookUpdate} key={key} />
         })
         return category_list;
       }
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
