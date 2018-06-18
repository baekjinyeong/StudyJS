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
		lottoArray, // 1 ~ 45 번호를 저장
		numberIdx = 0, // 생성된 번호
		numberArray = [], // 생성된 번호를 저장
		allNumber = [],
		count,
		result = 0,
		overl = true;

	// 1~ 45 번호 저장
	function saveNumber(){
		lottoArray = [];
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
		console.log(numberArray,count,overl);
	};
	

	// 중복값 찾기
	function overlapNum(){
		for (var i = 0; i < count; i++) { // 1부터 i까지 반복하여 중복확인
			if (numberArray[i] == numberIdx) { // 중복된 번호가 아니면 넘어가기.
				overl = false;
			}
		}

		if (overl) { //중복 없을 시 count 1 증가
			numberArray.push(numberIdx);
			numberArray[count] = numberIdx; //추출된 번호를 배열에 넣기
			arr.push("<td>" + numberIdx + "</td>");
			count++;
		}
		overl = true; //원래 true으로 돌아가기
		
		
	}

	// 가장많이 나온 수
	function frequent(arr) {
		return arr.sort(function (a, b) {
			return arr.filter(function (v) {
				return v === a;
			}).length - arr.filter(function (v) {
				return v === b;
			}).length;
		}).pop();
	}
	
	

	// 화면출력
	function screenPrint(){
		var button = document.querySelector('.button'),
			buttonFrequent = document.querySelector('.buttonfrequent'),
			print = document.querySelector('.lottoWrap'),
			print2 = document.querySelector('.lottofrequent');

		arr.push("<table>");

		// 번호뽑기
		button.addEventListener("click", function(){
			createNumber();
			print.innerHTML = arr.join('');
		});

		// 가장많이 나온 수
		buttonFrequent.addEventListener("click", function(){
			print2.innerHTML = frequent(numberArray);
		});
	};

	screenPrint();
}());
