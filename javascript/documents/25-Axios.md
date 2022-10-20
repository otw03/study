# 25-Axios
[1. Axios API](#1-axios-api)  
[2. API란 ?](#2-api란)  
[3. HTTP란 ?](#3-http란)  
[4. Axios 단축 메소드](#4-axios-단축-메소드)  

# 1. Axios API

웹 브라우저와 Node.js를 위한 **HTTP 비동기 통신** 라이브러리. Promise 객체를 기반으로 만들어짐.  

Ajax 처럼 API를 이용한 비동기 통신을 할 때 주로 사용한다.  

Ajax( 비동기 자바스크립트 ) : 브라우저의 XMLHttpRequest객체를 이용하여 화면 전체를 새로고침하지 않고 일부 변경된 데이터만 로드하는 비동기 처리.  

React에서 OpenAPI를 이용할 때 Axios를 주로 사용한다.  

# 2. API란 ?

### Application Programming Interface

다양한 응용프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스. 여기서 인터페이스는 프로그램과 프로그램을 연결해 주는 다리 역할을 하는 것을 의미한다.  

# 3. HTTP란 ?

### HyperText Transfer Protocol

- HyperText : 링크 주소를 참조하는 문서로 전자기기에 있는 데이터
- Transfer : 전달
- Protocol : 규약, 규칙

사용자는 URL을 입력한다. 브라우저는 해당 데이터를 서버에 요청(Request)하고, 서버는 요청에 응답(Response)해 데이터를 브라우저에 가져온다. 브라우저가 받아온 데이터를 화면에 보여준다.  

- HTTP Request : 클라이언트의 요청
- HTTP Response : 서버의 응답

즉, **클라이언트의 요청에 서버가 응답하는 방식, 세부적인 방법을 규약으로 정해놓은 것**을 HTTP 라고 한다.  

# 4. Axios 단축 메소드

### GET

조회

```jsx
GET : axios.get(url[, config])
```

### POST

 생성

```jsx
POST : axios.post(url, data[, config])
```

### PUT

수정 

```jsx
PUT : axios.put(url, data[, config])
```

### DELETE

삭제

```jsx
DELETE : axios.delete(url[, config])
```
