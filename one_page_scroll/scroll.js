(function(){
	'use strict';
	console.log('test');

	/*
	1. 각 section별 scrollTop값을 구한다.
	2. li의 index 값을 구한다.
	3. li 클릭 시 index 값을 가져와 스크롤 이벤트를 준다.
	4. 가져온 index 값을 클릭하면 화면 Y값을 이동시켜준다. [0] 일 때 높이값, [1] 일 때 높이값
	*/

	let arr = [];


	function scrollSet (scrollOffset) {
		const pageOffset = scrollOffset.offsetTop;
		const pageOffsetScroll = "";
		console.log(`pageOffset = ${pageOffset}`);
	}

	function scroll (){
		const scrollBtn = document.getElementsByTagName('li');
		console.log(`scrollBtn = ${scrollBtn}`);
		for (let i = 0; i < scrollBtn.length; i++) {
			console.log(scrollBtn[i]);
			
			if (i === 0) {
				scrollBtn[i].addEventListener('click', e => {
					console.log("a");
					scrollSet(document.querySelector('.page1'));
				});
			}
			else if (i === 1) {
				scrollBtn[i].addEventListener('click', e => {
					console.log("b");
					scrollSet(document.querySelector('.page2'));
				});
			}
			else if (i === 2) {
				scrollBtn[i].addEventListener('click', e => {
					console.log("c");
					scrollSet(document.querySelector('.page3'));
				});
			}
		}
	}
	scroll();
}());

