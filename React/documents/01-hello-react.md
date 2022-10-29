# 01-hello-react
[01. 프로젝트 생성하기](#01-프로젝트-생성하기)  
[02. 컴포넌트의 종류](#02-컴포넌트의-종류)  
[03. 실습](#03-실습)  

### 리액트란?

사용자 인터페이스를 만들기 위한 JS 라이브러리  

### 프레임워크와 라이브러리의 차이

1) 프레임워크 : 원하는 기능 구현에 집중하여 개발할 수 있도록 필요한 기능을 갖추고 있는 것, 일정한 형태를 가지고 다양한 형태의 결과물을 만드는 것.  
정해진 프로그램의 틀에 맞게 사용자가 필요한 기능을 입력함.  

2) 라이브러리 : 소프트웨어를 개발할 때 프로그래밍 사용하는 비휘발성 자원의 모임, 공통으로 사용될 수 있는 특정한 기능들을 모듈화한 것.  
호출하는 개발자가 필요한 기능을 원할 때 호출함.  

- 둘의 차이점은 어플리케이션의 제어 흐름의 권한을 누가 가지고 있느냐가 핵심.

### ****리액트는 어쩌다 만들어졌을까?****

****배경****

- dom을 직접 건드리는 작업을 하면 코드가 난잡해지고 번거롭다.

****React의 발상****

- 상태가 바꼈을 때, dom을 전부 날려버리고 다시 만들어서 보여주자.

****문제점****

- 매번 이렇게 하게되면 다양한 문제가 발생

****해결****

- 메모리에 가상DOM(자바스크립트 객체)을 만든다.  
업데이트가 필요한 부분만 가상DOM으로 수정한다.  
⇒ 속도 향상
- 그 이후 REACT의 알고리즘을 통해 다른 부분을 감지하여 ⇒ 실제 DOM에 패치 시켜준다.

**리액트의 장점**

- 컴포넌트(부품)로 나누어서 정리가 가능하다.

# 01. 프로젝트 생성하기

node.js 설치된 상태에서  

터미널(혹은 명령프롬프트)를 열고 아래의 명령어를 통해 설치 수행.  

`npm install -g yarn`  

## 1) 프로젝트 생성 및 초기화

아래의 명령으로 프로젝트를 생성한다.  

프로젝트 이름은 영어 소문자만 사용 가능함.  

`yarn create react-app 프로젝트이름`  

## 2) 프로젝트 실행하기

프로젝트를 VSCode로 열고, Ctrl + ~를 눌러 터미널 실행.  
(터미널상에서 프로젝트가 생성된 디렉토리 안에서 명령을 수행해도 동일함.)  

`yarn start`  

# 02. 컴포넌트의 종류

## 1) 컴포넌트

- 재사용 가능한 HTML(UI) 조각단위

## 2) 클래스 컴포넌트

- React 오리지널 컴포넌트
- class 형태로 정의하는 컴포넌트.
- 함수형 컴포넌트보다 구문이 복잡하고 길다.  
함수형 컴포넌트보다 구문이 좀 더 명확하다.

## 3) 함수형 컴포넌트 (권장)

- 클래스 컴포넌트보다 구문이 간결하지만 그만큼 더 난해할 수 있다.
- 리액트 버전 16이후에 LifeCycle을 처리할 수 있는 hook이라는 기능이 도입되면서  
**React에서 공식적으로 권장**하는 컴포넌트 작성 방법

# 03. 실습

**다른 js 컴포넌트를 import(참조)하여  
내가 리턴하는 JSX 코드 안에서 재사용하여  
DOM 구조를 작성**  

- 소스코드 구조  
`index.html ← index.js ←App.js ←MyComponent1.js ← MySubComponent.js`
- [http://localhost:3000/](http://localhost:3000/) 주소가 public 폴더에 대응됨  
test폴더 > hello.html  
⇒ [http://localhost:3000/](http://localhost:3000/)test/hello.html  
하지만 public 폴더에서 작업할 일은 없다.
- node가 src폴더의 내용을 파일 하나로 병합한다.  
그 과정에서 주석 없애고 줄바꿈 없앰  
root에 들어간다
- React의 시작은 src폴더의 index.js에서 시작함
- 반드시 마침태그 또는 태그 끝에 `/` 를 넣어줘야한다
- id속성단위로 js 컴포넌트화 시켜라

### index.js

```jsx
/**
 * 프로그램 시작점.
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */

// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';

// 이 소스파일(index.js)과 동일한 위치의 App.js("./App")를 App이라는 이름으로 가져온다.
import App from './App';

/** 컴포넌트를 페이지에 랜더링한다. */
// App.js에서 정의한 `App`이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
// -> <React.StrictMode> 이 적용되어 있는 경우, 선언만 하고 사용되지 않는 변수들에 대한 경고 메시지가 브라우저 콘솔에 표시된다.
//    개발용이므로 최종 빌드시에는 제거하는 것이 좋다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### App.js

```jsx
// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from 'react';

// (3-1) 직접 작성한 컴포넌트 참조
import Hello from './MyComponent1';
import World from './MyComponent2';

/** (2) App이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위) 정의 */
// 프로젝트에서 컴포넌트를 렌더링(화면에 출력)하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다.
// 반환되는 HTML 코드는 JSX 문법을 사용한다.
// JSX --> XML과 비슷한 React 정용 Javascript 확장 문법.
function App() {
  return (
    <div>
      <h1>Hello React</h1>

      {/* (3-2) Hello World라는 이름의 컴포넌트 출력 */}
      <Hello></Hello> {/* 반드시 태그 끝에 `/`또는 끝태그가 있어야함 */}
      <World />
    </div>
  );
}

export default App;
```

### MyComponent1.js

```jsx
// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from 'react';

import MySubComponent from './MySubComponent';

/**
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적.
 */
const MyComponent1 = () => {
    // 리턴은 항상 HTML구조를 의미하는 JSX 문법이어야 하고,
    // JSX 구조는 무조건 단 하나의 태그요소만 반환해야 함.
    // --> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미
    return (
        <div>
            <h2>안녕하세요 리액트</h2>
            <p>리액트 컴포넌트 구조 연습입니다.</p>

            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
        </div>
    );
};

export default MyComponent1;
```

### MySubComponent.js

```jsx
// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from 'react';

const MySubComponent = () => {
    return (
        <div>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    );
};

export default MySubComponent;
```
