/**
 * app.js
 */

import "classlist-polyfill";

document.getElementById('menu').onclick = function(){
  document.getElementsByClassName('header')[0].classList.toggle("is-visible");
}
var url = window.location.pathname.replace('/', '').replace('.html', '');

document.body.classList.add(url + '-bg');