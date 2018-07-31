
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
			defalutCount = 0,
			scrollEvent = 0, // 스크롤 한번씩만 적용시키기 위한 변수 선언
			height = $(window).height();

		// 클릭 이벤트
		$(listBtn).on('click', function(e) {
			e.preventDefault();

			var btnIdx = $(this).parent('li').index(),
				offsetTop = $(listPage).eq(btnIdx).offset().top,
				target = $(e.target),
				current = target.parent('li');

			defalutCount = btnIdx;

			$(current).addClass('current').siblings().removeClass('current');
			$('body, html').stop().animate({scrollTop: offsetTop},700);
		});

		// 마우스 휠 이벤트
		$(window).on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();

			var wheelDelta = e.originalEvent.wheelDelta,
				wheelDetail = e.originalEvent.detail;

			if(wheelDelta <= 0 || wheelDetail > 0) {
				direction('down');

			} else if(wheelDelta > 0 || wheelDetail < 0) {
				direction('up');
			}
			wheelCurrent();
		});

		// 스크롤 이동방향
		function direction(move) {
			if(move === 'down') {
				if(scrollEvent === 0 && defalutCount < (listPage.length-1 || defalutCount <= 0)) {
					scrollEvent = 1;
					defalutCount++;
					
					$('body, html').stop().animate({scrollTop: height * defalutCount},700,
					function(){
						scrollEvent = 0;
					});
				}
			} else if(move === 'up') {
				if(scrollEvent === 0 && defalutCount){
					scrollEvent = 1;
					defalutCount--;
					
					$('body, html').stop().animate({scrollTop: height * defalutCount},700,
					function(){
						scrollEvent = 0;
					});
				}
			}
		};

		// 스크롤 시 버튼 current
		function wheelCurrent(){
			var wheelIdx = $(listPage).eq(defalutCount).index();
			console.log(wheelIdx);

			if(wheelIdx === 0 && defalutCount === 0) {
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 1 && defalutCount === 1) {
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 2 && defalutCount === 2) {
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			} else if(wheelIdx === 3 && defalutCount === 3) {
				$(listBtn).parent('li').eq(wheelIdx).addClass('current').siblings().removeClass('current');
			}
		};
	};
	scrolling();
}());
