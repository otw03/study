# 24-XMLHttpRequest(Ajax)  
[01. Ajax](#01-ajax)  
[02. Ajax와 XHR 방식의 요청과 응답](#02-ajax와-xhr-방식의-요청과-응답)  
[03. XHR](#03-xhr)  
[04. Ajax 동작원리](#04-ajax-동작원리)  

# 01. Ajax

JSON데이터를 JS로 로딩하는 기술  

JSON을 백엔드가 관리하면 내용의 변경을 프로그래밍적으로 수행할 수 있기 때문에 JSON데이터를 백엔드에 두는 것이다.  

Ajax가 동작하려면 시작주소가 무조건 http 여야 한다.  

통신으로 다른 html을 긁어와서 내 화면 어디엔가 붙여넣기 하는 것  

비동기적으로 자바스크립트를 이용해서 서버와 브라우저가 통신하는 방식  

자바스크립트에서는 Ajax 통신을 위해 XMLHttpRequest 객체를 사용한다.  

### 특징

- 페이지 새로고침 없이 서버에 요청
- 서버로부터 데이터를 받고 작업을 수행

# 02. Ajax와 XHR 방식의 요청과 응답

HTML 페이지에서 댓글을 추가하면 현재 HTML페이지는 그대로 유지한다.  

서버에서 응답으로 보내는 데이터가 HTML이 아닌 XML또는 JSON이다.  

클라이언트 HTML에서는 응답으로 받은 XML또는 JSON을 활용해 HTML을 생성한다.  

# 03. XHR

XMLHttpRequest (XML보다는 JSON을 더 많이 사용함)

자바스크립트는 XMLHttpRequest 객체를 사용하여 서버와 통신하고 데이터를 교환한다.  

- Ajax 기능을 수행하는 통신 객체 생성

```jsx
const xhr = new XMLHttpRequest();
```

- `readyState`: XMLHttpRequest 객체의 현재 상태

UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨.  
OPENED (숫자 1) : open() 메소드가 성공적으로 실행됨.  
HEADERS_RECEIVED (숫자 2) : 모든 요청에 대한 응답이 도착함.  
LOADING (숫자 3) : 요청한 데이터를 처리 중임.  
DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨  

```
준비완료 -> xhr객체의 요청이 초기화 됨 -> 로딩바 출현
XMLHttpRequest.OPENED
접속시도 (일반적인 경우 사용하지 않음)
XMLHttpRequest.HEADERS_RECEIVED
통신중(일반적인 경우 사용하지 않음)
XMLHttpRequest.LOADING
통신종료 
XMLHttpRequest.DONE
```

- `onreadystatechange`

xhr객체의 상태가 변화할 때 마다 호출되는 이벤트 → 총 4번 호출된다. (준비완료, 접속시도, 통신중, 통신완료)  
XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출되는 함수  
각각의 상태는 `readyState`(: XMLHttpRequest 객체의 현재 상태) 라는 값을 통해 조회할 수 있다.    

```jsx
xhr.onreadystatechange = (e) => {};
```

- `status`

서버의 문서 상태  

1. status의 값을 통해 성공, 실패 여부를 판단해야 한다.  
 - 200 : OK (성공)  
2. 백엔드와의 통신에 실패한 경우 --> Fail  
status의 값에 따라 실패 원인을 판단하여 사용자에게 적절한 메시지를 표시  
 - 404 : Page Not Found (url오타)  
 - 400 : 접근권한 없음. (url을 폴더까지만 지정했으나 해당 폴더에 index.html이 없는 경우)  
 - 403 : 서버의 접근 거부 (ex: 파일명이 지정되지 않고 index.html도 없는 경우)  
 - 50x : 백엔드의 시스템 에러. 이경우 Frontend에서 할 수 있는 작업이 없다.  
- `xhr.open`  
: open(방식(GET, POST, PUT, PATCH, DELETE, HEAD), "보낼 서버 주소")이라는 메소드 실행
- `xhr.send`  
: open이 요청을 열어줬다면 send로 요청을 **전송해준다.**  
백엔드와의 통신 시도 (통신과정에서 총 4번의 이벤트가 발생한다. -> 준비완료, 접속시도, 통신중, 통신완료)  
통신 결과를 리턴받는 것이 아닌 통신 과정중에 발생하는 이벤트를 통해 후속처리를 구현해야 한다.

# 04. **Ajax 동작원리**

1.사용자에 의한 요청 이벤트 발생  

2.이벤트 핸들러에 의해 자바스크립트 호출  

3.자바스크립트는 XMLHttpRequest 객체를 이용하여 서버로 요청을 보낸다.  
이때, 웹 브라우저는 서버의 응답을 기다리지 않고, 다른 작업을 처리할 수 있다.(비동기성)  

4.서버는 전달받은 XMLHttpRequest 객체를 가지고, Ajax 요청을 처리한다.  

5~6.서버는 처리한 결과를 XML 혹은 JSON 형태의 데이터로 웹브라우저에 전달한다. 이때, 새로운 데이터를 전부 보내지 않고 필요한 데이터만 전달한다.  

7.서버로부터 전달받은 데이터를 가지고 웹페이지의 일부분만 갱신하는 자바스크립트를 호출한다.  

8.웹 페이지의 일부분만 다시 로딩되어 표시된다.