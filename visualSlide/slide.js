(function(){
	'use strict';
	console.log('test');

function slide(){

	var guideList = $('.guide-slide-list'),
			guideItem = guideList.find('.guide-slide-item'),
			guideLength = guideItem.length -1,
			guideWidth = guideItem.outerWidth(),
			count = 0;

	$(document).on('click','.btn-slider-prev', function(){
		motion('prev');
	});

	$(document).on('click','.btn-slider-next', function(){
		motion('next');
	});

	function motion(action){
		if(action == 'next' && count < guideLength) {
			count++;
			if(count >= guideLength) {
				count = guideLength;
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
	}
};
slide();

}());
