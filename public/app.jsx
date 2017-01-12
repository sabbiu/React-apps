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

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var name = this.refs.name.value;

		if (name.length>0) {
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
		);
	}
});

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
	handleNewName: function(name) {
		this.setState({
			name: name
		});
	},
	render: function() {
		// console.log(this.props);
		var name = this.state.name,
				msg = this.props.msg;
		return (
			<div>
				<GreeterMessage name={name} msg={msg}/>
				<GreeterForm onNewName={this.handleNewName}/>
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
