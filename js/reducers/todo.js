
import assign from 'object-assign';
import Immutable from 'immutable';

import {

  LOAD_TODO_REQUEST,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_ERROR

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
	  	console.log('LOAD_TODO_REQUEST ', action.result);
		return state;

	  case LOAD_TODO_SUCCESS:
	  	console.log('LOAD_TODO_SUCCESS');
			return state.update( 'all', list => {
				return convertToRecord( action.result, TodoRecord );
			})

	  case LOAD_TODO_ERROR:
	  	console.log('LOAD_TODO_ERROR');
			return state;

	  default:
			return state;
  }
}
