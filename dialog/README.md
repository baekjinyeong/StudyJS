# Dialog

## 정의

- 흔히 레이어, 모달 등으로 부르는 형태의 UI
- 페이지의 주 컨텐츠 위에 새로운 컨텐츠 영역을 노출하는 형태의 UI
- 왜?
	- 주 컨텐츠와 다른 흐름의 내용
	- 부가적인 설명
	- 페이지 내에 마땅히 노출할 부분이 없는 경우?
	- 알림, 확인, 사용자 입력 등

## 접근성

- 노출 시 다이얼로그 영역 내로 포커스 이동되어야 함
	- 영역 자체로 포커스?
	- 영역 내 첫 포커스 가능한 요소로 포커스 이동?
	- 영역 내 특정 요소로 포커스 이동?
- 어떠한 내용을 담은 다이얼로그인지 알려주어야 함
- 키보드로 포커스 이동이 가능해야 하고 포커스가 다이얼로그 내에 유지되어야 함
- 다이얼로그를 닫으면 열기 전에 포커스가 있던 곳으로 포커스가 돌아가야 함

## 인터랙션

- 키보드:
	- Tab/Shift + Tab: 포커스 이동(다음/이전)
	- ESC: 다이얼로그 닫기
- 마우스: 영역 외부 클릭 시 다이얼로그 닫기

## 타입

특수한 목적을 갖는 형태:

- 알림(alert): 사용자가 바로 확인해야 하는 내용 알림
- 확인(confirm): 사용자가 의사 결정을 해야 하는 경우
- 입력(prompt): 사용자가 특정 값을 입력해야 하는 경우

그 외:

- 모달(modal): 흔히 dimmed 레이어라고 칭하는 다이얼로그 외 페이지 내의 다른 요소와 인터랙션할 수 없는 형태

## 스타일링 이슈

- 다이얼로그 내용이 많은 경우 작은 화면에서도 제대로 내용 확인이 가능한가?
- 노출 위치
	- 중앙 노출
	- 전체 화면 노출
	- 특정 요소 주변 혹은 클릭한 위치에 노출
- 모달인 경우 dimmed 영역 노출

## 참고 링크

- [WAI-ARIA Authoring Practices 1.1 - 2.9 Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)
- [eBay MIND Patterns - Dialog](https://ebay.gitbooks.io/mindpatterns/content/disclosure/dialog.html)
