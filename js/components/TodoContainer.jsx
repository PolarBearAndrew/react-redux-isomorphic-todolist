var React = require('react');
var TodoItem = require('./TodoItem.jsx');
var TodoList = require('./TodoList.jsx');
var TodoItemContainer = require('./TodoItemContainer.jsx');

export default class ProductsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

      var nodes = this.props.todo.map( todo => {

        return <TodoItemContainer
                  key={todo.id}
                  todo={todo}
                  onCheck={this.props.actions.done} />;
      });

      return (
        <TodoList title="My Todo List">
          {nodes}
        </TodoList>
      );
    }

};