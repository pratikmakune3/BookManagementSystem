var React = require('react');

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

module.exports = DidComponent;
