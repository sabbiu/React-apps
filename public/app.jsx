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
		};
	},
	onButtonClick: function(e) {
		e.preventDefault();
		var name = this.refs.name.value;

		this.setState({
			name: name
		})
		// alert(name);
	},
	render: function() {
		console.log(this.props);
		var name = this.state.name,
				msg = this.props.msg;
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{msg + '!!'}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
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
