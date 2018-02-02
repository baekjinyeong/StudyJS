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
	let doc = window.document;

	const pageHeight = window.innerHeight; // window의 높이값
	console.log(pageHeight); // 1014

	const pageButton = document.querySelectorAll("li");
	let pageScrollTop = document.querySelector(".page-section").scrollTop; // 현재 top 값
	console.log(`scrollTop값 : ${pageScrollTop}`); // 0
	console.log(`버튼 인덱스값 : ${pageButton}`);

	// li 의 인덱스 값 가져오기
	for (let i = 1; i < pageButton.length; i++) {
		// console.log(i); // 0, 1
		pageScrollTop = arr.push(`${pageButton[i] * pageHeight}`);
		console.log(`scrollTop값 : ${pageScrollTop}`);
		console.log(`버튼 인덱스값 : ${pageButton[i]}`);

		// pageButton[i].addEventListener("click", e => {
		// 	if (i === 0) {
		// 		console.log("a");
		// 		arr.push('${offsetTop}');
		// 	} else {
		// 		console.log("b");
		// 	}
		// });
	}
	console.log(arr);
}());