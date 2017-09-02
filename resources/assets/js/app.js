/**
 * app.js
 */
import "swiper";
import "classlist-polyfill";
const doc = document;
const classList = doc.body.classList;
const url = window.location.pathname.replace('/', '').replace('.html', '');
let routes = [
	'/',
	'about',
	'clientsandawards',
	'contact',
	'index',
	'work'
];

let hasRoute = false;
routes.find(function(el) {
	if (el === url) {
		hasRoute = true;
		return;
	}
});

doc.getElementById('menu').onclick = function(){
	doc.getElementsByTagName('body')[0].classList.toggle("is-visible");
}
if (window.location.pathname === '/') {
	classList.add('index-bg');
} else if (!hasRoute) {
		classList.add('page-not-found');
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