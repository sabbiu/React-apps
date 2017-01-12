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
		var updates = {};
		var name = this.refs.name.value,
				msg = this.refs.msg.value;

		if (name.length>0) {
			this.refs.name.value = '';
			updates.name = name;
		}

		if (msg.length>0) {
			this.refs.msg.value = '';
			updates.msg = msg;
		}

		this.props.onNewUpdates(updates);

	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="name" placeholder="Enter Name"/><br />
				</div>
				<div>
					<textarea ref="msg" placeholder="Enter Description"/><br/>
				</div>
				<button>Submit</button>
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

var name = 'Sabbiu',
		msg = 'Hey, whats up!';
ReactDOM.render(
	<Greeter name={name} msg={msg}/>,
	document.getElementById('app')
);
