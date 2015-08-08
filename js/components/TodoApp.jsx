import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { Connector }          from 'react-redux';

// flux
import * as TodoActions   from '../actions/TodoActions';
import TodoContainer      from './TodoContainer';
// import ProductsContainer  from './ProductsContainer';
// import ProductDetail      from './ProductDetail';

var actions

export default class TodoApp extends Component {

  // <Connector> 是 container component，也就是 Dan 說的 smart component
  // 它對外取得 state 並偵聽 change event 以觸發重繪
  // 此處的 select 則可更精準的選取 state tree 中自已需要的部份，而不是所有 state 都改變都回應
  // 注意下面示範了 app 中可以有多個 <Connector> 元件，並且每個元件可 select 不同的 state
  render() {
    return (
      <div>

        <Connector select={ state => state }>
          {this.renderTodo}
        </Connector>

      </div>
    );
  }

  // 傳來的第一個參數是個 obj，它直接對此 obj 做 distructuring
  // {dispatch: fn, todos: Array[8], routes: {...}}
  // 這裏單獨保留 dispatch fn，其它的 state tree 就放入 allStates{} 中
  // 也就是說整支程式的 state tree 是保存在　allState{} 裏面
  renderTodo( { dispatch, ...allStates }) {

    //console.log('renderTodo', dispatch, allStates);

    // 將所有 action 與 store.dispatch() 綁在一起，才能觸發所有 reducers 做事
    // 這也是為何 <Connector> 內要傳來 store.dispatch() 的原因
    if(!actions)
      actions = bindActionCreators(TodoActions, dispatch);

    //var todo = allStates.todo.all.find( p => p.id == allStates.todo.idCurrentProduct );

    var view = <TodoContainer todo={allStates.todo.all} actions={actions}/> ;

    return <div>{view}</div>;
  }
}
