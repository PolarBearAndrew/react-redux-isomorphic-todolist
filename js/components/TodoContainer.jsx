var React = require('react');
var TodoItem = require('./TodoItem.jsx');
var TodoList = require('./TodoList.jsx');
var TodoItemContainer = require('./TodoItemContainer.jsx');
var Input = require('./Input.jsx');

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

          <p>
            Title: <Input id="title" valName="title" />
            Info: <Input id="info" valName="info" />
            <input id='submit' type="submit" value="Add todo" onClick={this._handleClick.bind(this)}></input>
          </p>

          {nodes}
        </TodoList>
      );
    }

    _handleClick(){

      let newTodo = {
        title: window.title,
        info: window.info || ''
      }

      if(title){
        this.props.actions.addTodo(newTodo);
      }

      return false;
    }


};