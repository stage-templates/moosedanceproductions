/**
 * app.js
 */
import "swiper";
import "classlist-polyfill";

document.getElementById('menu').onclick = function(){
	document.getElementsByTagName('body')[0].classList.toggle("is-visible");
}
if (window.location.pathname === '/') {
	document.body.classList.add('index-bg');
} else {
	var url = window.location.pathname.replace('/', '').replace('.html', '');
	document.body.classList.add(url + '-bg');
}


var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30
    });