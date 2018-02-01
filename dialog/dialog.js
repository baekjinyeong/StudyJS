(function(){
	'use strict';

	//1차
	const dialog = document.querySelector('.dialog');
	const dialogWindow = document.querySelector('.dialog__window');
	let curElement; // 현재 포커스된 요소를 반환
	// const {width: WIDTH, height: HEIGHT} = document;
		
	// 포커스 이동 제한을 위한 tabindex 추가
	const tabIndexDiv = document.createElement('div');
	tabIndexDiv.tabIndex = 0;
	tabIndexDiv.classList.add('last_focus_tab');

	// open 버튼 클릭 시 모달레이어 open
	const dialogOpen = document.querySelector('.dialog_open');
	dialogOpen.addEventListener('click', e => {
		curElement = document.activeElement; // 현재 포커스된 요소를 반환
		dialog.classList.add('show');
		dialogWindow.appendChild(tabIndexDiv);
	});

	// close 버튼 클릭 시 모달레이어 close
	const dialogClose = document.querySelector('.dialog__close');
	dialogClose.addEventListener('click', e => {
		dialog.classList.remove('show');
		curElement.focus();
		dialogWindow.removeChild(tabIndexDiv);
	});

	// esc 클릭 시 모달레이어 close
	function modalClose(e){
		const dialogClose = document.querySelector('.dialog__close');
		if(!e.keyCode || e.keyCode === 27){
			dialog.classList.remove('show');
			dialogWindow.removeChild(tabIndexDiv);
			curElement.focus();
		}
	}
	document.addEventListener('keydown', modalClose);
	
	// dimd 클릭 시 모달레이어 close
	function modalMaskClose(e) {
		const dialogMask = document.querySelector('.dialog__mask');
		if(e.target === dialogMask){
			dialog.classList.remove('show');
			dialogWindow.removeChild(tabIndexDiv);
			curElement.focus();	
		}
	}
	document.addEventListener('click', modalMaskClose);

	// 포커스 이동
	tabIndexDiv.addEventListener('focus', e => {
		dialogWindow.focus();
	});
}());