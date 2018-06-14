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
			arr = [];

	function lotto(){
		var lottoArray = [], // 1 ~ 45 번호를 저장
			numberIdx = 1, // 생성된 번호
			numberArray = [], // 생성된 번호를 저장
			count = 0, // 추첨된 로또 번호 갯수
			all = [], // 모든 로또번호 담기
			button = document.querySelector('.button'),
			print = document.querySelector('.lottoWrap');

		

		// 1 ~ 45 번호 담기
		for (var i = 1; i <= 45; i++) {
			lottoArray.push(i);
		};
		// console.log(lottoArray);
		
		// 랜덤 번호 생성하기
		arr.push("<table>");

		button.addEventListener("click", function(){
			// allNum();

			count++;
			if (count <= 6) {
				// 랜덤번호 생성
				for (var i = 0; i <= 6; i++) {
					for (var k = 0; k <= i; k++) {
						numberIdx = parseInt((Math.random() * lottoArray.length) + 1);
					}
					if(numberArray[i] == 6) {
						break;
					}
				}
				overlapNum();
			} else {
				arr.push("<tr>");
				count = 0;
				allNum();
			}
			console.log(numberArray);
			print.innerHTML = arr.join('');
		});

			// 가장 많이 나온 수 찾기
			function allNum(){
				if(numberArray.length === 6) {
					all.push(numberArray);
				}
			};

		// 중복확인 - 마지막 배열값과 이전 배열값을 비교 후 동일하면 다시 뽑는다.
		function overlapNum(){
			if(numberArray.slice(-1)[0] !== numberArray) {
				numberArray.push(numberIdx);
				arr.push("<td>" + numberIdx + "</td>");
			} else {

			}
		}
	};
	lotto();
	
}());
