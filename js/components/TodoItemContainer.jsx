var React = require( 'react' );
var TodoItem = require( './TodoItem.jsx' );

export default React.createClass( {
	render: function() {

		return (
			<TodoItem todo={this.props.todo}
					  onCheck={this.props.onCheck.bind(this, this.props.todo)} />
		);
	}
} );

