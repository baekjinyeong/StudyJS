
(function(){
	'use strict';
	console.log('test');


	/*
		1. 클릭 이벤트 형성
		2. 버튼 인덱스 값 구하기
		3. 클릭된 버튼 인덱스에 해당하는 페이지인덱스구하기
		4. 구한 페이지 인덱스별 top 값 찾기
		5. animate로 페이지 이동 - scrollTop
	*/

	function scrolling(){
		var listBtn = $('.btn-slide-page').find('li').children('a'),
			listPage = $('.page-list li');


		// 클릭 이벤트
		$(listBtn).on('click', function(e) {
			event.preventDefault();

			var btnIdx = $(this).parent('li').index(),
				offsetTop = $(listPage).eq(btnIdx).offset().top;

			$('body, html').stop().animate({scrollTop: offsetTop},300);
			console.log(btnIdx, offsetTop);
		});
	};

	scrolling();
}());
