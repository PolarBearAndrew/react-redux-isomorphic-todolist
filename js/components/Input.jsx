var React = require( 'react' );

var TodoItem = React.createClass( {
  propTypes: {
    valName: React.PropTypes.string.isRequired,
  },

  render: function() {
	var todo = this.props.todo;

	return (
		<input type="textbox" onChange={ this._handleChange } />
	);
  },

  _handleChange( ev ){
  	window[this.props.valName] = ev.target.value;
  },



} );

module.exports = TodoItem;
