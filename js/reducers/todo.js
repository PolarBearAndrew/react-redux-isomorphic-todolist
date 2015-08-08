
import assign from 'object-assign';
import Immutable from 'immutable';

import {

  LOAD_TODO_REQUEST,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_ERROR,
  FINISH_TODO,
  ADD_TODO

} from '../constants/ActionTypes';

const TodoState = Immutable.Record({
	all: null,
	idCurrentProduct: null,
	total: '0'
})

const TodoRecord = Immutable.Record({
	id: null,
	title: "",
	info: ""
})


const initialState = new TodoState();

// convert plain js obj to Immutable.Record of type ProductRecord
function convertToRecord( arr, Def ){
	// 最終返還出去的是 List of ProductRecord
	return Immutable.List.of( ...arr.map( item => new Def(item) ) );
}

export default function products( state = initialState, action ) {

  switch ( action.type ) {

	  case LOAD_TODO_REQUEST:
	  	console.log('LOAD_TODO_REQUEST');
			return state;

	  case LOAD_TODO_SUCCESS:
	  	console.log('LOAD_TODO_SUCCESS');
			return state.update( 'all', list => {
				return convertToRecord( action.result, TodoRecord );
			})

	  case LOAD_TODO_ERROR:
	  	console.log('LOAD_TODO_ERROR');
			return state;

		case FINISH_TODO:
			console.log('FINISH_TODO');
			return state.update( 'all', list => {
				return list.filter( val => { return val != action.todo; });
			});

		case ADD_TODO:
			console.log('ADD_TODO');
			let newTodo = TodoRecord;

			newTodo.id = state.all.length + 1;
			newTodo.title = action.todo.title;
			newTodo.info = action.todo.info;

			return state.update( 'all', list => {
				return list.push(newTodo)
			});

	  default:
			return state;
  }
}
