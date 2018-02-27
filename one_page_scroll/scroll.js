
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
			listPage = $('.page-list li'),
			wheelCount = 0,
			wheel = 0,
			height = listPage.height();


		// 클릭 이벤트
		$(listBtn).on('click', function(e) {
			e.preventDefault();

			var btnIdx = $(this).parent('li').index(),
				offsetTop = $(listPage).eq(btnIdx).offset().top,
				target = $(e.target),
				current = target.parent('li');

			$(current).addClass('current').siblings().removeClass('current');
			$('body, html').stop().animate({scrollTop: offsetTop},300);
		});

		// 마우스 휠 이벤트
		$(window).on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();
			wheel = e.originalEvent.wheelDelta;

			if(wheelCount >= 0) {
				direction('down');
				if(wheelCount > (listPage.length-1)) {
					return false;
				}
			} else {
				direction('up');
				// if((-wheelCount) >= (-listPage.length-1)) {
				// 	wheelCount = 0;
				// }
			}
			console.log(wheelCount);
		});

		// 스크롤 이동방향
		function direction(move){
			if(move === 'down') {
				wheelCount++;
				$('body, html').stop().animate({scrollTop: (height * wheelCount)}, 400);
			} else if(move === 'up') {
				wheelCount--;
				$('body, html').stop().animate({scrollTop: (height * wheelCount)}, 400);
			}
		};
	};
	scrolling();
}());
