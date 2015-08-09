import React from'react';

var TodoItem = React.createClass( {
  propTypes: {

    todo: React.PropTypes.shape( {
      title: React.PropTypes.string.isRequired,
      info: React.PropTypes.string.isRequired
    } ).isRequired,

    onCheck: React.PropTypes.func.isRequired
  },

  render: function() {
    var todo = this.props.todo;

    return (
      <div className="uk-panel uk-panel-box uk-margin-bottom">

        <p className="uk-h4">
            <input type="checkbox" onClick={this.props.onCheck}> </input>
            <span className="info"> {todo.title} </span>
            {todo.info}
        </p>

      </div>
    );
  }
});

module.exports = TodoItem;
