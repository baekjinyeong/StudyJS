(function(){
	'use strict';
	console.log('test');

function slide(){

	var guideList = $('.guide-slide-list'),
			guideItem = guideList.find('.guide-slide-item'),
			guideLength = guideItem.length,
			guideWidth = guideItem.outerWidth(),
			count = 0;

	guideList.css('width', guideWidth * guideLength)

	$(document).on('click','.btn-slider-prev', function(){
		direction('prev');
	});

	$(document).on('click','.btn-slider-next', function(){
		direction('next');
	});

	$(document).on('click', '.btn-data-slides', function(e){
		e.preventDefault();
		var target = $(e.target),
				current = target.parent('.data-slides-item'),
				btnIdx = current.index();

		count = btnIdx;
		$(current).addClass('is-active').siblings().removeClass('is-active');

		guideList.stop().animate({
			'margin-left' : $(current).index() * -guideWidth
		},300);
	});

	function direction(action){
		if(action == 'next') {
			count++;
			if(count >= guideLength-1) {
				count = guideLength-1;
			}

		} else if (action == 'prev') {
			count--;
			if(count <= 0) {
				count = 0;
			}
		}
		move();
	};

	function move(){
		guideList.stop().animate({
			'margin-left': count * (-guideWidth) + 'px'
		},300);
		currentPage();
	}

	function currentPage(){
		var pageIdx = guideItem.eq(count).index();
		$('.btn-data-slides').closest('.data-slides-item').eq(pageIdx).addClass('is-active').siblings().removeClass('is-active');

		console.log(pageIdx,count);
	}
};
slide();

}());
