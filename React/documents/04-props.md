# 04-props

# props

컴포넌트를 사용하는 부모로부터 전달받는 변수값이 포함되어 있는 객체  

필요한 경우에만 선언한다.

흔히 컴포넌트에게 HTML 속성 같은 형태로 전달된다.

### MyProps.js

컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의 형식은 `{}`로 감싼다.  

```jsx
import React from "react";
import MyPropsSub from "../components/MyPropsSub";
import Meta from "../Meta";

const MyProps = () => {
    console.clear();

    return (
        <div>
            {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
            <Meta title="MyProps.js" description="여기는 MyProps.js 파일 입니다." />

            <h2>MyProps</h2>

            {/* 컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의 형식은 `{}`로 감싼다. */}
            <MyPropsSub />
            <MyPropsSub name='민호' age='19' />
            <MyPropsSub name='수영' age={21} />
        </div>
    );
}   

export default MyProps;
```

### MyPropsSub .js

```jsx
const MyPropsSub = (props) => {

    console.group("MyPropsSub");
    console.log(props);
    console.log(typeof props.name);
    console.log(typeof props.age);
    console.groupEnd();

    return (
        <div>
            <h3>MyPropsSub</h3>
            <p>
                제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.
            </p>
        </div>
    );
}

export default MyPropsSub;
```

속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해 둘 수 있다.  
(defaultProps 객체이름 고정)  
가급적 무조건 권장~!!!!  

```jsx
MyPropsSub.defaultProps = {
    name: '이름없음',
    age: 20
};
```

