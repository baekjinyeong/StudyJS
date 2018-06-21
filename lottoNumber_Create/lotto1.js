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
	
	var arr = [],
			lottoArray, // 1 ~ 45 번호를 저장
			numberIdx = 0, // 생성된 번호
			numberArray, // 생성된 번호를 저장
			count,
			overlap = true;

	// 1~ 45 번호 저장
	function saveNumber(){
		lottoArray = [];
		numberArray = [];
		count = 0;

		for (var i = 1; i <= 45; i++) {
			lottoArray.push(i);
		};
	};
	saveNumber();

	// 랜덤번호 생성
	function createNumber(){
		numberIdx = parseInt((Math.random() * lottoArray.length) + 1);
		if (count < 6) {
			overlapNum()
			if(count === 6) {
				arr.push("<tr>");
				saveNumber();
			}
		}
	};
	
	// 중복값 찾기
	function overlapNum(){
		for(var i = 0;i <= 6; i++) {
			if (numberArray[i] == numberIdx) { // 6번 돌면서 담기는 numberArray[i] 안의 숫자와 numberIdx 의 값이 같으면 false 
				overlap = false;
				console.log(numberArray[i],overlap,numberIdx);
			}
		}
		
		if (overlap) { //중복 없을 시 overlap = true 일 경우 번호 생성
			numberArray.push(numberIdx);
			arr.push("<td>" + numberIdx + "</td>");
			count++;
		}
		overlap = true;
	}

	// 화면출력
	function screenPrint(){
		var button = document.querySelector('.button'),
				print = document.querySelector('.lottoWrap');

		arr.push("<table>");

		// 번호뽑기
		button.addEventListener("click", function(){
			createNumber();
			print.innerHTML = arr.join('');
		});
	};

	screenPrint();
}());
