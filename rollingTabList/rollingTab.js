(function(){
	'use strict';
	console.log('test');

	$(function(){
		// 그리드
		$('.item-grid').each(function(){
			itemTable($(this));
		});
		// 추천일자
		$(document).on('click', '.tabs_nav_item a', function(e) {
			e.preventDefault();
			$(this).closest('li').addClass('is_selected').siblings().removeClass('is_selected');
		});
	})

	/*
		1. ul 전체 넓이 값을 구한다.
		2. li의 길이를 구한다.
		3. 구한 li의 길이가 ul을 초과하면 다음 버튼을 활성화 시킨다.
		4. 활성화된 버튼을 클릭하면 li의 넓이만큼 이동시켜준다.
		5. li의 길이가 ul을 초과하지 않으면 next 버튼을 비활성화 시킨다.
	*/
	/*
		- 버튼 활성화는 span 태그에 is_active 클래스 추가
	*/

	$(function(){
		var moveCount = 0, // 초기값
			wrapWidth = $('.calendar_tabs_inner').width(), // 부모의 넓이
			slideLength = $('.tabs_nav_item').length, // li의 길이
			slideItemWidth = $('.tabs_nav_item').width(), // li의 넓이
			tabsWidth = (slideLength * slideItemWidth); // li를 감싸는 ul의 넓이

			console.log("calendar_tabs 넓이값 : "+wrapWidth);
			console.log("li 갯수 : "+slideLength);
			console.log("li 넓이 : "+slideItemWidth);
			console.log("ul.tabs_nav 태그의 넓이 : "+tabsWidth);

		// 이전
		$('.tabs_prev').on('click', function(e){
			var movePrev = (moveCount += slideItemWidth);

			if(movePrev < tabsWidth){
				$('.tabs_nav').animate({'margin-left': + movePrev + 'px'},300);
			} else {
				console.log('첫번째입니다.');
			}
			console.log("초기값 : "+ movePrev);
		});

		// 다음
		$('.tabs_next').on('click', function(e){
			var moveNext = (moveCount -= slideItemWidth);

			if(wrapWidth < tabsWidth) {
				$('.tabs_nav').animate({'margin-left': + moveNext + 'px'},300);
			} else {
				console.log('마지막입니다.');
			}
			console.log("초기값 : "+ moveNext);
		});
	});
}());