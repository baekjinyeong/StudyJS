(function(){
	'use strict';
	console.log('test');

	// 5개의 별 연속으로 찍어내기
	
	//증가
	for(var i=0;i<5;i++){
		var star = "";
		star += "★";
		document.write("<br />");
		for(var j=0;j<i+1;j++){
			document.write(star);		
		}
	}
	document.write("<br /><br />");

	//감소
	for(var i=5;i>0;i--){ //i가 5부터 시작하고 0보다 클 때 i를 -해준다.
		console.log(i);
		var star = "";
		star += "★";
		document.write("<br />");
		for(var j=1;j<i+1;j++){
			document.write(star);
		}
	}
	document.write("<br /><br />");

	//push, join을 사용한 증가
	var result = [];
	for(var i=0; i<5; i++) {
		for(var k=0; k<i+1; k++) {
			result.push("★");
		}
		result.push("<br/>");
	}
	document.write(result.join(''));

	//push, join을 사용한 감소
	var arr = [];
	for(var i=5;i>0;i--) {
		for(var j=1;j<i+1;j++) {
			arr.push("★");
			console.log(i+"a");
		}
		arr.push("<br />");
	}
	document.write(arr.join(''));
	console.log(arr);

	
}());