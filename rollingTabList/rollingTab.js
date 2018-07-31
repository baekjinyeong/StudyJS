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
		var defalutCount = 0, // 초기값
			tabs = $('.calendar_tabs').width(),
			slideLength = $('.tabs_nav_item').length, // li의 길이
			slideWidth = $('.tabs_nav_item').width(), // li의 넓이
			tabsNum = Math.floor(tabs / slideWidth); // tab 갯수

		// 이전
		$('.tabs_prev').on('click', function(){
			$('.tabs_next').addClass('is_active');

			if(defalutCount > 0){
				defalutCount--;
				$('.tabs_prev').addClass('is_active');
				$('.tabs_nav').stop().animate({'margin-left': + (defalutCount * (-slideWidth)) + 'px'},300);

				if(defalutCount === 0) {
					$('.tabs_prev').removeClass('is_active');
				}
			} else {
				return false;
			}
			console.log(defalutCount, tabsNum-1);
		});

		// 다음
		$('.tabs_next').on('click', function(){
			$('.tabs_prev').addClass('is_active');

			if(defalutCount < tabsNum-1) {
				defalutCount++;
				$('.tabs_nav').stop().animate({'margin-left': + (defalutCount * (-slideWidth)) + 'px'},300);

				if(defalutCount === (tabsNum-1)) {
					$('.tabs_next').removeClass('is_active');
				}

			} else {
				return false;
			}
			console.log(defalutCount, tabsNum-1);
		});
		defaultActive();

		function defaultActive(){
			if(slideLength > tabsNum-1) {
				$('.tabs_next').addClass('is_active');
			} else {
				$('.tabs_next').removeClass('is_active');
			}
		}
	});
}());