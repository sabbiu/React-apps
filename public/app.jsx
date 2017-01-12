var Greeeter = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello React!</h1>
				<p>This is from a component</p>
			</div>
		)
	}
});

ReactDOM.render(
	<Greeeter/>,
	document.getElementById('app')
);
