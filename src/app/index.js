var React = require('react');
var ReactDOM = require('react-dom');
var DidComponent = require('./DidComponent');
var AmComponent = require('./AmComponent');
var WillComponent = require('./WillComponent');

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

ReactDOM.render(<ManageBooksComponent />, document.getElementById('wrapper'));
