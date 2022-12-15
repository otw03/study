# 통신과 서버, Node.js

# 통신

서로 다른 프로그램간의 데이터 교환  

HTTP 통신, Socket 통신이 있다.  

## HTTP 통신

- 클라이언트의 요청이 있을 때 서버가 응답하는 단방향 통신
- 1회성 통신(요청과 응답 주고 받은 뒤 바로 연결 종료)  
⇒ 웹사이트에 접속하거나 링크에 접속할 때마다 매번 웹사이트에 새로 접속하는 것
- Text, HTML, XML, JSON, Image 등 파일을 전송 받음
- 웹서버

## Socket 통신

- 서버와 클라이언트 양쪽에서 서로에게 데이터 전달이 이루어지는 양방향 통신
- 지속성 통신(따로 접속 해제하지 않는 이상 요청, 응답 지속적으로 가능)
- 자주 데이터를 주고 받아야하는 채팅 서비스 같은 환경에서 유리하다

### 웹 환경에서의 통신

URL 형식으로 특정 파일의 내용을 요청함  

웹 브라우저 = 클라이언트  

웹 서버 = 서버  

# 웹 서버

**요청**을 받으면 응답(요청한 내용)을 보내주는 프로그램(요청 처리하는 기계)  

ex) 사용자(클라이언트)가 웹사이트(주소URL)에 접속하면  

웹사이트 html파일을 전송해주는 것  

### 요청 방식 4가지

1. GET 읽기
2. POST 쓰기
3. PUT 수정
4. DELETE 삭제

ex) 사용자(클라이언트)가 웹사이트(주소URL) 페이지를 GET요청하면  

거기에 해당하는 웹사이트 html파일을 보내줌  

# Node.js

## Node.js 란?

구글 크롬의 js해석 엔진(V8)으로 이루어져 있다.  

js를 브라우저 외 다른 환경에서도 실행할 수 있게 해줌

js 실행창, 실행환경 

## Node.js 쓰는 이유

- Event-driven(이벤트 기반), Non-blocking I/O 특성을 가지는 실행 환경
- SNS, 채팅 서비스처럼 요청이 한번에 매우 많이 일어나는 서비스에 적합하다.
- JS로 웹서버 개발 가능
- 코드가 짧고 쉬워서 빠른 개발 가능 ⇒ 개발 생산성 향상

### Non-blocking I/O

예매 웹서버의 처리 단계시

1. 고객 요청
2. 요청 승낙
3. 티켓 고객에게 보내줌
- **일반 프로그래밍 언어로 서버 개발시**  
요청을 하나씩 받는다.  
요청이 많거나 오래 걸리는 요청이 있으면 그것을 처리하기 위해 다른 사용자의 요청을 못 받는다. (멈추거나 대기시간 발생)
- **node.js로 서버 개발시**  
요청을 한번에 받는다.  
처리속도가 빠른 것 순서로 요청을 처리한다.  그렇기 때문에 요청 받는 것을 멈추지 않는다.  (멈추거나 대기시간X)
- 일반 서버가 이것을 못하느냐?  
서버 스케일링 혹은 멀티 쓰레딩을 통해 해결  
⇒ 요청을 처리하는 서버를 늘린다

# Express

## Express 란?

node.js 서버 구현 프레임워크  

### express 설치

```bash
npm install express
```

또는

```bash
yarn add express
```

### express 모듈 참조 + 객체 생성 + 포트번호

여기서 생성한 app 객체의 use() 함수를 사용해서
각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.

```jsx
const express = require('express'); // Express 모듈 불러오기
const app = express();
const port = 포트번호;
```

### get요청시 응답내용 작성

```jsx
// http://localhost:port/경로
app.get("/", (req, res) => {
	// 브라우저에 보낼 응답 내용
	let html = '<h1>Express로 구현한 Node.js 백엔드 페이지</h1>';

	// 응답 보내기
	res.status(200).send(html);
});
```

### 서버 실행

```jsx
app.listen(port, () => {
	console.log("start express server");
	console.log(`server address => http://localhost:${port}`);
}
```

터미널에 다음 명령어로 서버 실행

```bash
node 파일경로
```