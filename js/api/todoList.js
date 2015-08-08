import _todo from './demo_data.js';
const TIMEOUT = 100;

export default {

	getTodo: function (timeout) {
	  timeout = timeout || TIMEOUT;
	  return new Promise( (resolve, reject) => {
		  setTimeout(function () {
		  	//console.log( 'todoList.js::todo 取得: ', _todo );
		  	if( 'undefined' == typeof window ){
		    	resolve(_todo);
		  	}else{
		  		resolve(window.getTodo().all)
		  	}
		  }, timeout);
	  })
	}
}

