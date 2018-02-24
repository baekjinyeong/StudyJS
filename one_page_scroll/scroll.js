
(function(){
	'use strict';
	console.log('test');


	/*
		1. 각 div태그의 top 위치 값을 구한다.
		2. down, up 방향 조건을 설정해준다.
		3. page 클릭 이벤트를 형성한다.
		4. 버튼 클릭 시 해당 버튼의 인덱스 값을 부여해준다.
		5. 클릭 버튼의 인덱스 값에 div 태그의 top 값을 곱해준다. (animate 사용)
	*/

	function scrolling(){
		var srollTop = $(window).scrollTop(),
			windowHeight = $(window).height(),
			listBtn = $('.btn-slide-page').find('li'),
			listPageWrap = $('.wrap'),
			listPage = $('.page-item'),
			listPageLength = listPage.length,
			moveDerection = 'down',
			listIdx = $('.page-item').index(),
			listTop = $('.page-item').offset().top;


		// 스크롤 이동
		var scrollMove = function(){
			if(moveDerection === 'down') {
				$(window).stop().animate({scrollTop : listIdx * listTop},300);

			} else if((moveDerection === 'up')){
				$(window).stop().animate({scrollTop : listIdx * listTop},300);
			}
		};

		// 스크롤 이벤트
		var scrollEvent = function(){
			$('.btn-slide-page li').on('click', function(){
				var btnIdx = $(this).index();
				if(listIdx < btnIdx ) {
					moveDerection = 'down';
				} else {
					moveDerection = 'up';
				}
				console.log(listIdx, btnIdx, moveDerection, listTop);
			});
		};
		scrollEvent();
		
	};
	scrolling();
}());
