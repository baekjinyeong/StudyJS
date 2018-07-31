>**Tip:** Check!!

for문에서 document.write를 쓰면 계속 document를 찾게되어 dom을 찾을 때 퍼포먼스에 무리가 많이 간다.
그래서 document.write 나 .append 등등 dom 제어 하는 건 최소한으로 사용해준다.

참고예시 (깔끔한 소스..)
<pre><code>for(var i=0; i<5; i++) {
	var result = "";
	for(var k=0; k<i+1; k++) {
	result += "★"
}
result += '<br/>';
document.write(result);
}</code></pre>

2
+= 로 값을 담아주는 것 보다, 배열에 push해서 join해주는 것이 더 좋다.
<pre><code>var result = [];
for(var i=0; i<5; i++) {
	for(var k=0; k<i+1; k++) {
		result.push("★");
	}
	result.push("<br/>");
}
document.write(result.join('')); // separator을 빼도 된다.</code></pre>

3
Array.prototype.join()
	join 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만들어준다.
	구문 ) str = arr.join([separator = ','])
<pre><code>var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입</code></pre>

Array.prototype.push()
push 명령어는 배열의 끝에 하나 또는 그 이상의 엘리먼트를 추가하고 배열의 변경된 길이를 반환해준다.
* 이 명령어는 배열을 담는 객체 call() 또는 apply()로 사용될 수 있다.
구문 ) arr.push(element1, ..., elementN)
<pre><code>var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');

console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4</code></pre>

* 이 예제는 두번째 배열에서 모든 엘리먼트를 push하기 위해 apply()를 사용해준다.
<pre><code>var vegetables = ['설탕당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

// 첫번째 배열에 두번째 배열을 합친다. 
// vegetables.push('셀러리', '홍당무'); 하는 것과 동일하다.
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['설탕당근', '감자', '셀러리', '홍당무']</code></pre>
