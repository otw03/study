# 09-****useNavigate() 파라미터 전달, useLocation() 파라미터 수신****

## navigate(: useNavigate())

history.push 와 비슷한 기능 : 브라우저의 url을 조작해준다  
⇒ url 변경 ⇒ 모든 컴포넌트 재실행  

리액트는 App.js 부터 모든 컴포넌트가 전부 재실행된다  
⇒ 재실행되는 과정의 url의 키워드를 넘겨줌  

### **History**

**History**란 세션 기록(페이지 방문 기록)에 대한 접근 방법과 메서드를 제공하는 것입니다.  

또한 세션(session)이란 웹 사이트의 여러 페이지에 걸쳐 사용되는 사용자 정보를 저장하는 방법.  

간단하게는 뒤로가기 앞으로가기 기능  

추가 내용: [https://basemenks.tistory.com/269](https://basemenks.tistory.com/269)  

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

