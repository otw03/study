# 08-성능최적화
[1. React.useCallback(), useCallback()](#1-reactusecallback-usecallback)  
[2. React.memo(), memo()](#2-reactmemo-memo)  

## 1. React.useCallback(), useCallback()

함수는 컴포넌트가 리렌더링 될 때마다 새로 만들어진다.  

`useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.  

`useCallback` 은 함수를 두번째 인자의 값이 변경될 때까지 저장하고 재사용한다.  
⇒ 해당 컴포넌트가 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환  

```jsx
const 함수이름 = React.useCallback(e => {
	 //... 이벤트 처리 구현
}, []);
```

두번째 인자 값이 변경될 때 생성한다.  
⇒ 만약 콜백함수가 함수 밖의 변수, 함수에 의존한다면 해당 값을 두번째 항목인 배열에 명시해야 한다.    

## 2. ****React.memo(), memo()****

렌더링 결과를 저장하여 불필요한 리렌더링을 건너뛰게 해줌  

컴포넌트의 `props`가 바뀌지 않는다면, 리렌더링을 방지해서 성능 최적화를 해준다.  

memo함수를 사용하면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링하도록 설정 가능  

이전 `props`와 다음 `props`의 동등 비교를 위해 비교 함수를 수행후 true 라면 저장된 상태를 이용한다.  

`import React, { memo } from 'react';`  하고 `memo()` 또는  

`import React from 'react';` 하고  `React.memo()`  사용  

```jsx
import React from 'react';

const News = () => {
	 //... 생략 ...
};

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(News);
```

또는 

```jsx
import React from 'react';

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
const News = React.memo(() => {
	 //... 생략 ...
});

export default News;
```

### 사용할 때

함수형 컴퍼넌트가 같은 `props`로 자주 렌더링 될거라 예상될 때  

일반적으로 부모 컴퍼넌트에 의해 하위 컴퍼넌트가 같은 props로 리렌더링 될 때

### 사용하지 말아야 할 때

렌더링될 때 `props`가 다른 경우가 대부분인 컴포넌트  

`props`가 자주 변하는 컴퍼넌트를 `React.memo()`로 래핑할지라도, React는 두 가지 작업을 리렌더링 할 때마다 수행할 것이다.  

1. 이전 `props`와 다음 `props`의 동등 비교를 위해 비교 함수를 수행한다.  
2. 비교 함수는 거의 항상 `false`를 반환할 것이기 때문에, React는 이전 렌더링 내용과 다음 렌더링 내용을 비교할 것이다.  

비교 함수의 결과는 대부분 `false`를 반환하기에 `props` 비교는 불필요하게 된다.