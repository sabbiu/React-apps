var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			msg: 'This is from a component'
		};
	},

	render: function() {
		// console.log(this.props);
		var name = this.props.name,
				msg = this.props.msg;
		// console.log(name);
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{msg + 'Ho ha ha ha hu haha ha aha ha'}</p>
			</div>
		)
	}
});

var name = 'Sabbiu',
		msg = 'Hey, whats up!';
ReactDOM.render(
	<Greeter name={name} msg={msg}/>,
	document.getElementById('app')
);
