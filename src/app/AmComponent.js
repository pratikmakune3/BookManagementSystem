var React = require('react');

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

module.exports = AmComponent;
