/**
 * app.js
 */

import "classlist-polyfill";

document.getElementById('menu').onclick = function(){
  document.getElementsByClassName('header')[0].classList.toggle("is-visible");
}
if (window.location.pathname === '/') {
		document.body.classList.add('index-bg');
} else {
	var url = window.location.pathname.replace('/', '').replace('.html', '');
	document.body.classList.add(url + '-bg');
	console.log('wee');
}