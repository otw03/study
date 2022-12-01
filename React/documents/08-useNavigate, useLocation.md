# 08-파라미터 전달, 수신
### 사용방법
`yarn add react-router-dom` 명령어를 통해 react router dom 설치

# navigate(: useNavigate())
`import { useNavigate } from 'react-router-dom';` 를 통해 import 한다.

useNavigate는 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공한다.  

history.push 와 비슷한 기능 : 브라우저의 url을 조작해준다  
⇒ url 변경 ⇒ 모든 컴포넌트 재실행  

리액트는 App.js 부터 모든 컴포넌트가 전부 재실행된다  
⇒ 재실행되는 과정의 url의 키워드를 넘겨줌  

### History

**History**란 세션 기록(페이지 방문 기록)에 대한 접근 방법과 메서드를 제공하는 것입니다.  

또한 세션(session)이란 웹 사이트의 여러 페이지에 걸쳐 사용되는 사용자 정보를 저장하는 방법.  

간단하게는 뒤로가기 앞으로가기 기능  

### 세션이란?

웹 사이트의 여러 페이지에 걸쳐 사용되는 사용자 정보를 저장하는 방법  

사용자가 브라우저를 닫아 서버와의 연결을 끝내는 시점까지를 세션이라고 한다.  

세션은 서비스가 돌아가는 서버 측에 데이터를 저장하고, 세션의 키값만을 클라이언트 측에 남겨둔다.

브라우저는 필요할 때마다 이 키값을 이용하여 서버에 저장된 데이터를 사용한다.

# useLocation
`import { useLocation } from 'react-router-dom';` 를 통해 import 한다.

**QueryString으로 전달되는 검색 키워드를 받는다**  

```jsx
const { search } = useLocation();
```

**QueryString을 객체로 변환 → `?` 이후의 변수들을 이 객체 안에 분리해서 저장**  

```jsx
const query = new URLSearchParams(search);
const { keyword } = Object.fromEntries(query);
```

**페이지 강제 이동을 위한 객체 생성**  

```jsx
const navigate = useNavigate();
```

**검색폼에서의 전송 이벤트**  

`navigate(/department/id/등등 내가 원하는 주소);`  

페이지 url이 **www.naver.com** 라면 **`www.naver.com/department?keyword=…` 로 변경됨**  

```jsx
const onSearchSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("submit~!!");
    // 검색어를 QueryString으로 저장하여 페이지를 이동한다.
    navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
}, [navigate]);
```

**검색용 폼**  

```jsx
<form onSubmit={onSearchSubmit}>
    <input type='text' name='keyword' />
    <button type='submit'>검색</button>
</form>
```

