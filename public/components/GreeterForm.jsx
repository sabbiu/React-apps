var React = require('react');

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

module.exports = GreeterForm;
