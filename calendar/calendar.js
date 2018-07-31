(function(){
	'use strict';
	console.log('test');
	
	/* 
		1. date 객체 초기화 (year, month, day, date)
		2. 월요일 ~ 토요일까지 세팅 weekDays[currentDay]
		3. 현재 년,월,일 출력 getFullYear(), getMonth(), getDate()
		4. 월 총 주 수세팅
		5. 시작일
		6. 마지막일 ( 31, 28, 31, 30 ...)
		7. 해당 월의 총 날짜 출력  getDate()
	*/

	const doc = window.document;
	let arrCal = [];

	// Date 초기화
	let date = new Date();
	let currentYear = date.getFullYear(); // 년도
	let currentMonth = date.getMonth(); // 월
	let currentDay = date.getDay(); // 요일 (월~일)
	let currentDate = date.getDate(); // 날짜 (시작일~마지막일)
	

	arrCal.push('<table>');

	// 월요일 ~ 일요일 세팅
	let weekDays = ['일','월','화','수','목','금','토'];

	// 현재 년,월,일,요일 출력
	new Date(arrCal.push(`<tr><th colspan='7'>${currentYear}년 ${currentMonth+1}월 ${currentDate}일 ${weekDays[currentDay]}요일</th></tr>`));

	// 일 월 화 수 목 금 토 출력
	for (let k = 0; k < weekDays.length; k++) {
		currentDay = k;
		arrCal.push(`<td>${weekDays[currentDay]}</td>`);
	}

	let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 월의 마지막 일

	// 해당 월 주 수 출력
	let weekNum = Math.ceil((currentDay + lastDay[currentMonth])/7); 
	console.log(weekNum); // 5

	// 윤년계산
	if (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) {
		lastDay[1] = 29;
	} else {
		lastDay[1] = 28;
	}

	// 해당 월 1일의 요일 구하기
	let firstDate = new Date (currentYear,currentMonth, 1),
		firstDay = firstDate.getDate(),
		firstWeek = firstDate.getDay();

	// 월 날짜 뿌리기
	for (let i = 1; i <= weekNum; i++){
		arrCal.push("<tr>");
		for (let j = 1; j <= weekDays.length; j++) {
			if (i===1 && j <= firstWeek || firstDay > lastDay) {
				arrCal.push("<td>&nbsp;");
			} else {
				if (firstDay <= lastDay[currentMonth]) {
					arrCal.push("<td>");
					if (firstDay === currentDate) {
						arrCal.push("<font color='FF0000'><strong>");
					}
					arrCal.push(firstDay++);
				} 
			}
			arrCal.push("</td>");
		}
		arrCal.push("</tr>");
	}
	arrCal.push("</table>");

	doc.write(...arrCal);
	console.log(doc);
}());
