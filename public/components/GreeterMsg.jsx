var React = require('react');

var GreeterMessage = React.createClass({
	render:function(){
		var name = this.props.name,
				msg = this.props.msg;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{msg + '!!'}</p>
			</div>
		);
	}
});

module.exports = GreeterMessage;
