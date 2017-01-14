var React = require('react');
var GreeterMessage = require('GreeterMsg');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			msg: 'This is from a component'
		};
	},
	getInitialState: function() {
		return {
			name: this.props.name,
			msg: this.props.msg
		};
	},
	handleNewUpdates: function(updates) {
		this.setState(updates);
	},
	render: function() {
		// console.log(this.props);
		var name = this.state.name,
				msg = this.state.msg;
		return (
			<div>
				<GreeterMessage name={name} msg={msg}/>
				<GreeterForm onNewUpdates={this.handleNewUpdates}/>
			</div>
		)
	}
});

module.exports = Greeter;
