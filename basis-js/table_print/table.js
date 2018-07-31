(function(){
	'use strict';
	console.log('test');
	
	/* 
		1. 화면에 출력할 값을 담아준다. 
		2. 값을 1씩 증가시킨다.
		3. 값을 표에 담는다.
		4. 값이 1씩 증가할 때 행을 늘려주고, 행이 5개가 되면 열을 추가한다.
	*/

	// let arr = [];
	// let number = 1;

	// for(let i=0; i<5; i++) { // 열 증가
	// 	for(let j=0;j<5;j++) { // 행 증가
	// 		arr.push(number++);
	// 	}
	// 	arr.push("<br />");
	// }
	// document.write(arr.join(''));

	 
	const doc = window.document;
	let number = 0;
	let arr = [];

	arr.push("<table border='0' bgcolor='#000'>");
	for(let i=0; i<5; i++) {
		arr.push("<tr>"); // 열 증가
		for(let j=0;j<5;j++) { // 행 증가
			number++;
			arr.push("<td width='100' height='30' bgcolor='#fff' align='center'>" + number + "</td>");
		}	
	  arr.push("</tr>");
  	}
	arr.push("</table>");

	doc.write(...arr); // doc.write(arr.join(''));
	console.log(doc);

}());