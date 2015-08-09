import _todo from './demo_data.js';
require('isomorphic-fetch');


const TIMEOUT = 100;

export default {

	getTodo: function (timeout) {
	  timeout = timeout || TIMEOUT;

		fetch('https://www.kimonolabs.com/api/2ydhrtbc?apikey=YTFXE6bo643qztfqtgMJxbTghxkihceB')
			.then( res => {
				console.log('fetch success', res);
			})
			.catch( err => {
				console.log('fetch err', err);
			});

// 		fetch('/users', {
//   method: 'post',
//   body: new FormData(form)
// })

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

