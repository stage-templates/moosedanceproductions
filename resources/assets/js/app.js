/**
 * app.js
 */
import "swiper";
import "classlist-polyfill";
const doc = document;
const classList = doc.body.classList;
let routes = [
	'/',
	'about',
	'clientsandawards',
	'contact',
	'index',
	'work'
];
let url = window.location.pathname.replace('/', '').replace('.html', '');

doc.getElementById('menu').onclick = function(){
	doc.getElementsByTagName('body')[0].classList.toggle("is-visible");
}
if (window.location.pathname === '/') {
	classList.add('index-bg');
} else {
	classList.add(url + '-bg');
}


let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30
    });