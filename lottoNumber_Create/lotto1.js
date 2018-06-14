(function(){
	'use strict';
	console.log('test');
	/*
		1. 1~ 45 번호를 담는다.
		2. 섞기 클릭 시 1 ~ 45 번호가 랜덤으로 섞인다.
		3. 뽑기 클릭 시 1 ~ 45 번호 중 하나가 뽑힌다.
		4. 뽑힌 번호는 차례대로 담긴다.
		5. 다시 섞기 버튼 클릭 후 번호를 뽑는다.
		6. 이 떄 뽑힌 번호는 중복되지 않아야 한다.
	*/
	
	var doc = window.document,
			arr = [],

			lottoArray = [], // 1 ~ 45 번호를 저장
			numberIdx = 1, // 생성된 번호
			numberArray = [], // 생성된 번호를 저장
			count = 0, // 추첨된 로또 번호 갯수
			all = [], // 모든 로또번호 담기
			button = document.querySelector('.button'),
			print = document.querySelector('.lottoWrap');

	// 1~ 45 번호 저장
	function saveNumber(){
		for (var i = 1; i <= 45; i++) {
			lottoArray.push(i);
		};
	};
	saveNumber();

	// 랜덤번호 생성
	function createNumber(){
		numberIdx = parseInt((Math.random() * lottoArray.length) + 1);

		count++;
		if (count <= 6) {
			numberArray.push(numberIdx);
			arr.push("<td>" + numberIdx + "</td>");
		}
		
		if (count === 6) {
			arr.push("<tr>");
			count = 0;
		}
		console.log(numberArray, count);
	};

	// 중복값 찾기

	// 화면출력
	function screenPrint(){
		arr.push("<table>");

		button.addEventListener("click", function(){
			createNumber();
			print.innerHTML = arr.join('');
		});
	};

	screenPrint();
}());
