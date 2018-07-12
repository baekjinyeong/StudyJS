(function(){
	'use strict';
	console.log('test');

function slide(){

	var guideList = $('.guide-slide-list'),
			guideItem = guideList.find('.guide-slide-item'),
			guideWidth = guideItem.outerWidth(),
			count = 0;

	$(document).on('click','btn-slider-prev', function(){
		motion(prev);
	});

	$(document).on('click','btn-slider-next', function(){
		motion(next);
	});

	function move(){
		guideList.stop().animate({'margin-left': count * (-guideWidth) + 'px'},300);
	}

	function motion(action){
		if(action === next) {
			count++;
		} else {
			count--;
		}
		move();
	};
};
slide();

}());
