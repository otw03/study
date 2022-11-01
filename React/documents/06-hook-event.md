# 07-hook
[01. State(상태값)](#01-state상태값)  
[02. 기본 Hook 함수들](#02-기본-hook-함수들)  
[- 1) useState](#1-usestate)  
[- 2) useCallback](#2-usecallback)  

## 01. State(상태값)

컴포넌트 내부에서 변할수 있는 값  

이 페이지 안에서 유효한 전역변수 같은 개념.  

state값은 직접 변경할 수 없고 반드시 setter를 통해서만 변경 가능하다.  

**상태값이 변경될 때마다 컴포넌트 함수는 매번 재실행**된다.  
그러므로 **컴포넌트 영역은 상태값의 변경에 따라 반복적으로 다시 렌더링** 된다.  
상태값은 **화면에 출력될 변수에만 사용**해야 한다.  

## 02. 기본 Hook 함수들

### 1) useState

- 함수형 컴포넌트에서 state값 생성
- 하나의 useState 함수는 하나의 상태값만 관리할 수 있다.
- 컴포넌트에서 관리해야 할 상태가 여러 개면 useState를 여러번 사용

> 상태변수: 현재 state 변수  
변수에대한setter함수: 상태변수를 갱신할 수 있는 함수  
useState: 리액트 Hook  
useState(변수의기본값)의 넘겨주는 값 : 초기값
> 

useState() 함수를 import하고 사용하는 경우.  

```jsx
import React, {useState} from 'react';
	...
const [상태변수, 변수에대한setter함수] = useState(변수의기본값);
```

useState() 함수를 import하지 않고 직접 사용하는 경우.  

```jsx
const [상태변수, 변수에대한setter함수] = React.useState(변수의기본값);
```

화면에 출력할 상태값을 JSON 객체 myDate로 정의하고  
이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.  

```jsx
const [myDate, setMyDate] = React.useState({
    startDate: day.format('YYYY-MM-DD'),
    endDate: day.format('YYYY-MM-DD'),
});
```

- MyState.js

```jsx
import React from 'react';

const MyState = () => {
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
    const onMyNameChange = e => {
        // e.currentTarget은 jQuery의 ${this}에 해당함.
        // 즉, 이벤트가 발생한 자신(여기서는 input태그)
        setMyName(e.currentTarget.value);
    };

		// 상태값이 변경될 때마다 컴포넌트 영역은 리렌더링 되기 때문에 아래의 출력문은 상태값이 변경될 때마다 반복 출력된다.
    console.log(new Date());

    return (
        <div>
            <h2>MyState</h2>

            {/* state값을 출력할 때는 단순히 변수값으로서 사용한다. */}
            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>

            <hr />

            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange} />
            </div>

            <div>
                <label htmlFor='myPointInput'>점수: </label>
                <input 
                    id='myNameInput' 
                    type='range' 
                    min='0'
                    max='100'
                    value={myPoint} 
                    // 이벤트 핸들러를 익명 화살표 함수 형식으로 정의한 경우
                    onChange={e => {
                        setMyPoint(e.currentTarget.value);
                    }} 
                />
            </div>
        </div>
    );
}

export default MyState;
```

### 2) useCallback

컴포넌트가 최초 렌더링될 때 1회만 이벤트 핸들러 함수를 정의하고 이후 재사용 가능  

두 번째 파라미터인 배열에 특성 state값을 지정할 경우 해당값이 수정될 때만 이벤트 정의  

이벤트 핸들러 함수를 필요한 경우에만 생성  

이벤트 핸들러 중복 정의 방지로 성능 최적화에 사용  

```jsx
import React from 'react';

const MyCallback = () => {
    const [myText, setMytext] = React.useState('Hello React');

    const  onInputChange = React.useCallback( (e) => {
        setMytext(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h2>MyCallback</h2>
            <h3>{myText}</h3>
            <input type="text" placeholder='input...' onChange={onInputChange} />
        </div>
    );
}

export default MyCallback;
```
