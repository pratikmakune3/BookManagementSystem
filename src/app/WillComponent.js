var React = require('react');
var ReactDOM = require('react-dom');

var WillComponent = React.createClass({

  getInitialState : function(){
    return{
      willArray : ['p','q']
    };
  },

  render : function(){
    var willRead = this.state.willArray.map(function(book, i){
      return (
        <li>{book}</li>
      );
    });
    return (
      <div>
        <h2>Wish to Read</h2>

        <form id = "add-todo" onSubmit = {this.handleSubmit}>
          <input type = 'text' id='willRead' placeholder = 'Add a Book' />
          <input type = 'submit' value = 'Add Book' />
        </form>

        <ul>{willRead}</ul>
      </div>

    );
  },

  //custom functions
  handleSubmit: function(e){
    e.preventDefault();
    this.state.willArray.push(document.getElementById('willRead').value);
    console.log(this.state.willArray);
    this.setState({
      willArray : this.state.willArray
    });
  }

});

module.exports = WillComponent;
