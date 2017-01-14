var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')

var name = 'Don',
		msg = 'Hey, whats up!';
ReactDOM.render(
	<Greeter name={name} msg={msg}/>,
	document.getElementById('app')
);
