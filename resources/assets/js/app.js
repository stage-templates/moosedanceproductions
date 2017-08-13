/**
 * app.js
 */

import "classlist-polyfill";

document.getElementById('menu').onclick = function(){
  document.getElementsByClassName('header')[0].classList.toggle("is-visible");
}