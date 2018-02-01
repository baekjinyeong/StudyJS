(function(){
	'use strict';
	console.log('test');

	/*
	1. Full일경우 window의 높이값을 구한다.
	2. 버튼 클릭
	3. window의 y값 이동
	*/

	let pageHeight = window.innerHeight; // window의 높이값
	const pageSlide = document.querySelector('.btn-slide-page');
	const pageSlideArr = pageSlide.querySelector('li');
	const pageSlideLink = pageSlide.childNodes;


	console.log(pageSlideLink);

	pageSlideArr.addEventListener('click', e => {
		e.target.classList.add("is-active");
		console.log('a');
	});

}());