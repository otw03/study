# 03-jsx

JSX(JavaScript XML)는 Javascript에 XML을 추가한 확장한 문법이다.  

JSX는 하나의 파일에 자바스크립트와 HTML을 동시에 작성하여 편리하다.  

# 0**1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.**

- 에러 예시

```jsx
function App() {
	return (
		<div>Hello</div>
		<div>GodDaeHee!</div>
	);
}
```

- 정상 코드

```jsx
function App() {
	return (
		<div>
			<div>Hello</div>
			<div>GodDaeHee!</div>
		</div>
	);
}
```

# 02. JSX에서의 자바스크립트 기본 표현식

JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 `{}`
 으로 감싸야 한다.  

```jsx
const name = '리액트';
const age = 19;

<h3>
		{name}님은 {age +1}세 입니다.
</h3>
```

### HTML 속성에 변수를 출력할 경우 따옴표를 사용할 수 없다.

```jsx
const color = '#f00';

<p>
    <font color='#00f'>{name}</font>님은&nbsp;
    <font color={color}>리액트 개발자</font>입니다.
</p>
```

### 사용자 정의 함수 호출하기

```jsx
const message = '리액트는 가장 주목받는 프론트앤드 프레임 워크 입니다.';

const myEllipses = (message, len) => {
    let str = message;
    if (str.length > len) {
        str = str.substring(0, len) + '...';
    }
    return str;
};
<blockquote>{myEllipses(message, 15)}</blockquote>
```

