(function(){
	'use strict';
	console.log('test');

function slide(){

	var guideList = $('.guide-slide-list'),
			guideItem = guideList.find('.guide-slide-item'),
			guideLength = guideItem.length,
			guideWidth = guideItem.outerWidth(),
			count = 0;

	guideList.css('width', guideWidth * guideLength);
	
	function direction(action){
		if(action == 'next') {
			count++;
			moveNext();
		} else if (action == 'prev') {
			count--;
			if(count < 0) {
				count = guideLength-1;
				// $(this).children("li.guide-slide-item:first").insertAfter($(this).children("li.guide-slide-item:last"));
				// $(guideList).css({
				// 	'margin-left' : 0
				// });
			}
		}
		currentPage();
	};

	function control(event){
		var target = $(event.target),
				current = target.parent('.data-slides-item'),
				btnIdx = current.index();
    
		count = btnIdx;
		$(current).addClass('is-active').siblings().removeClass('is-active');

		guideList.stop().animate({
			'margin-left' : $(current).index() * -guideWidth
		},300);
	}

	function move(){
		// guideList.stop().animate({
		// 	'margin-left': count * (-guideWidth) + 'px'
		// },300);
		// currentPage();
	}

	function moveNext(){
		guideList.stop().animate({
			'margin-left': count * (-guideWidth) + 'px'
		},300, function(){
			if(count >= guideLength) {
				count = 0;
				$(".guide-slide-list > li.guide-slide-item:last").insertBefore($(".guide-slide-list > li.guide-slide-item:first"));
				guideList.css({
					'margin-left' : guideWidth * -1
				});
			}
		});
	}

	function movePrev(){}

	function currentPage(){
		$('.btn-data-slides').closest('.data-slides-item').eq(count).addClass('is-active').siblings().removeClass('is-active');
		console.log(count,guideLength);
	}

	$(document).on('click','.btn-slider-prev', function(){
		direction('prev');
	});

	$(document).on('click','.btn-slider-next', function(){
		direction('next');
	});

	$(document).on('click','.btn-data-slides', function(event){
		event.preventDefault();
		control(event);
	});
};
slide();

}());
