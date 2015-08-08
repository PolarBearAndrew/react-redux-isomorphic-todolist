import constants from 'react-constants';

// constants 插件會吐出 {ROUTE_CHANGE: "ROUTE_CHANGE"} 這樣的 pair string
export default constants([

	"ROUTE_CHANGE",
	"TOGGLE_LOADING",

    "LOAD_TODO_REQUEST",
  	"LOAD_TODO_SUCCESS",
  	"LOAD_TODO_ERROR",
  	"FINISH_TODO",
  	"ADD_TODO"

]);