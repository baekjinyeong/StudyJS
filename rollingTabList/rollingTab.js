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
		var width = $(".calendar_tabs_inner").width(),
			slideNum = $(".tabs_nav_item").length, // li 태그의 개수
			slideWidth = $(".tabs_nav_item").width(), // li 태그의 width
			tabsWidth = (slideNum * (-slideWidth)); // ul.tabs_nav 태그의 width
			console.log("calendar_tabs 넓이값 : "+width);
			console.log("li 갯수 : "+slideNum);
			console.log("li 넓이 : "+slideWidth);
			console.log("ul.tabs_nav 태그의 넓이 : "+tabsWidth);
		
		// 이전
		$(".tabs_prev").on('click', function(e) {
			e.preventDefault();
			var moveLeft = parseInt($(".tabs_nav").css("margin-left"));
			
			if (moveLeft < 0) {
				$(".tabs_nav").animate({"margin-left":"+=" + slideWidth + "px"},300);
				$(".tabs_prev").addClass("is_active");
			} else {
				$(".tabs_prev").removeClass("is_active");
				return;
			}
			console.log("왼쪽 : "+moveLeft);
		});

		// 다음
		$(".tabs_next").on('click', function(e){
			e.preventDefault();
			var moveLeft = parseInt($(".tabs_nav").css("margin-left"));
			
			if( tabsWidth < moveLeft ) {
				$(".tabs_nav").animate({"margin-left":"-=" + slideWidth + "px"},300);
			} else {
				alert("마지막 입니다.");
				$(".tabs_next").removeClass("is_active");
			}
			console.log("오른쪽 : "+moveLeft);
		});
	});
}());