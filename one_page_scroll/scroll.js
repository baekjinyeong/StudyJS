(function(){
	'use strict';
	console.log('test');

	/*
	1. 화면 전체 높이값을 구한다.
	2. li의 index 값을 구한다.
	3. li 클릭 시 index 값을 가져와 스크롤 이벤트를 준다.
	4. 가져온 index 값을 클릭하면 화면 Y값을 이동시켜준다. [0] 일 때 높이값, [1] 일 때 높이값
	*/

	let arr = [];

	const scrollBtn = document.querySelectorAll('section-link');
	const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop; // 스크롤 높이값
	let pageHeight = window.innerHeight;
	console.log(`scrollHeight = ${scrollHeight}`);
	console.log(`scrollBtn = ${scrollBtn}`);
	console.log(`pageHeight = ${pageHeight}`);

	for (let i = 1; i <= scrollBtn.length; i++) {
		const scrollWindow = document.querySelector('.page-section');
		let topPos = scrollWindow.offsetTop;
		console.log(`topPos = ${topPos}`);
		scrollBtn[i].addEventListener('click', e => {
			if (topPos === 0) {
				console.log("a");
			} else if (topPos === 1) {
				console.log("b");
			}
		});
	}
}());