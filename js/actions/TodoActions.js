import types from '../constants/ActionTypes'
import WebAPIUtils from '../utils/WebAPIUtils'

export function readAll() {

	return {
		// 為了 optimistic update，可透過 REQUEST | SUCCESS | ERROR 三狀態來決定 store 內做何種細微處理
		// 這裏宣告三種狀態要用的真實名稱
		types: [ types.LOAD_TODO_REQUEST, types.LOAD_TODO_SUCCESS, types.LOAD_TODO_ERROR ],

		// 就是進行遠方 async 操作，例如 WebAPIUtil.getUsers()
		promise: WebAPIUtils.getAllTodo()//.then( result => console.log( '先看結果: ', result ) )
	};
}

// routr.js 操作這支指令來切換 stateTree.routes.currentView 值
// 它在 routr.js 裏會 alias 為 this.route(view)
export function changeRoute(view) {
	return {
		type: types.ROUTE_CHANGE,
		view
	};
}


// 例如切換畫面或載入資料時，畫面上顯示 loading spinner
export function toggleLoading( show:Boolean, msg:String ) {
	// console.log( '\ntoggleLoading: ', show, ' >msg: ', msg );
	return {
		type: types.TOGGLE_LOADING,
		msg,
		show
	};
}

export function done( todo ) {
	return {
		type: types.FINISH_TODO,
		todo
	};
}

export function addTodo( todo ) {
	return {
		type: types.ADD_TODO,
		todo
	};
}