var React = require('react');
var ReactDOM = require('react-dom');

//Parent
var ManageBooksComponent = React.createClass({
  render : function(){
    return (
      <div>
        <DidComponent />
        <AmComponent />
        <WillComponent />
      </div>
    );
  }
});

var DidComponent = React.createClass({

  getInitialState : function(){
    return{
      didArray : ['a','b','c']
    };
  },

  render : function(){

    var didRead = this.state.didArray.map(function(book, i){
      return (
        <li>{book}</li>
      );
    });

    return (
      <div>
        <h2>Finished Reading</h2>
        <ul>
          {didRead}
        </ul>
      </div>
    );
  }, //render

});

var AmComponent = React.createClass({

  getInitialState : function(){
    return{
      amArray : ['l','m','n','o']
    };
  },

  render : function(){

    var amRead = this.state.amArray.map(function(book, i){
      return (
        <li>{book}</li>
      );
    });

    return (
      <div>
        <h2>Currently Reading</h2>
        <ul>{amRead}</ul>
      </div>
    );
  }
});

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

ReactDOM.render(<ManageBooksComponent />, document.getElementById('wrapper'));
