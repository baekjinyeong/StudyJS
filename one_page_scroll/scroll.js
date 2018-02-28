
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

	// 세팅
	$(window).load(function(){
		$('html').css('overflow','hidden');
		$('body, html').stop().animate({scrollTop: 0}, 200);
	});

	function scrolling(){
		var listBtn = $('.btn-slide-page').find('li').children('a'),
			listPage = $('.page-list li'),
			dafalutCount = 0,
			height = $(window).height();

		// 클릭 이벤트
		$(listBtn).on('click', function(e) {
			e.preventDefault();

			var btnIdx = $(this).parent('li').index(),
				offsetTop = $(listPage).eq(btnIdx).offset().top,
				target = $(e.target),
				current = target.parent('li');

			dafalutCount = btnIdx;

			$(current).addClass('current').siblings().removeClass('current');
			$('body, html').stop().animate({scrollTop: offsetTop},300);
		});

		// 마우스 휠 이벤트
		$(window).on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();

			if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				direction('down');
			} else {
				direction('up');
			}
			wheelCurrent();
		});

		// 스크롤 이동방향
		function direction(move){
			if(move === 'down') {
				if(dafalutCount < (listPage.length-1 || dafalutCount < 0)) {
					dafalutCount++;
					$('body, html').stop().animate({scrollTop: (height * dafalutCount)}, 500);
				}
			} else if(move === 'up') {
				if(dafalutCount){
					dafalutCount--;
					$('body, html').stop().animate({scrollTop: (height * dafalutCount)}, 500);
				} 
			}
		};
		
		// 스크롤 시 버튼 current
		function wheelCurrent(){
			var wheelIdx = $(listPage).eq(dafalutCount).index();
			console.log(dafalutCount, wheelIdx);

			if(wheelIdx === 0 && dafalutCount === 0) {
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 1 && dafalutCount === 1){
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 2 && dafalutCount === 2){
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 3 && dafalutCount === 3){
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			}
		};
	};
	scrolling();
}());
