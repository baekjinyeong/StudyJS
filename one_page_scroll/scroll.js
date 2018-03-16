
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
			listIdx = $('.page-item').index();

		// // 스크롤 이동
		// var scrollMove = function(){
		// 	for(var i = 0; i < listPageLength; i++) {
		// 		var listTop = $('.page' + i);
		// 		console.log(listTop);
		// 	}

		// 	if(moveDerection === 'down') {
		// 		$(window).stop().animate({scrollTop : listTop.offset().top},300);

		// 	} else if((moveDerection === 'up')){
		// 		$(window).stop().animate({scrollTop : listTop.offset().top},300);
		// 	}
		// };

		// // 버튼클릭 이벤트
		// var scrollEvent = function(){
		// 	$('.btn-slide-page li').on('click', function(){
		// 		var btnIdx = $(this).index();
		// 		if(listIdx < btnIdx ) {
		// 			moveDerection = 'down';
		// 		} else {
		// 			moveDerection = 'up';
		// 		}
		// 		console.log(listIdx, btnIdx, moveDerection);
		// 		scrollMove();
		// 	});
		// };
		// scrollEvent();


		// div top 값 
		var pageTop = function(){
			// 각 페이지별 top 값을 구한다.
			// 구한 top값을 버튼에 담아준다.
			for (var i = 1; i <= listPage.length; i++) {
				var posTop = $('.page' + i).offset().top;
				console.log(posTop);
			}
		};
		pageTop();

		// 페이지 이동
		var pageMove = function(){
			// $(window).stop().animate({scrollTop : offset().top},400);
		};

		// 버튼클릭 이벤트
		$('.btn-slide-page li').on('click', function(){
			// 버튼 인덱스를 구헤서 버튼을 클릭 시 해당 페이지 top값으로 이동한다. 
			// 각 번호에 top 값을 넣어준다.
			// 1번 클릭 시 1번 페이지의 top
			// 2반 클릭 시 2번 페이지의 top
			// 3번 클릭 시 3번 페이지의 top
		});
		pageMove();
	};
	scrolling();
}());
