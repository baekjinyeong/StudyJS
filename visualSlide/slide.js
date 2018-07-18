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
			moveNext();
			count++;
			if(count >= guideLength) {
				count = 0;
			}
		} else if (action == 'prev') {
			movePrev();
			count--;
			if(count < 0) {
				count = guideLength-1;
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
			'left' : $(current).index() * -guideWidth
		},300);
	}

	function moveNext(){
		var firstChild = guideList.children('li.guide-slide-item:first-child').clone();
		firstChild.appendTo(guideList);
		guideList.children('li.guide-slide-item:first-child').remove();
		guideList.css('left',0);
		guideList.stop().animate({'left': -guideWidth + 'px'},300);
	}

	function movePrev(){
		var lastChild = guideList.children('li.guide-slide-item:last-child').clone();
		lastChild.prependTo(guideList);
		guideList.css('left', -guideWidth + 'px');
		guideList.children('li.guide-slide-item:last-child').remove();
		guideList.stop().animate({'left': 0},300);
	}

	function currentPage(){
		$('.btn-data-slides').closest('.data-slides-item').eq(count).addClass('is-active').siblings().removeClass('is-active');
	}

	$(document).on('click','.btn-slider-prev', function(){
		direction('prev');
	});

	$(document).on('click','.btn-slider-next', function(){
		direction('next');
	});

	$(document).on('click', '.btn-data-slides', function(e){
		e.preventDefault();
		control(event);
	});
	
};
slide();

}());
