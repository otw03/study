# 15-웹페이지의 자바스크립트
[01. Javascript 소스코드의 위치](#01-javascript-소스코드의-위치)  
[02. DOM(Document Object Model) : 문서 객체 모델](#02-domdocument-object-model--문서-객체-모델)  
[03. HTML 요소를 선택하는 방법(HTML 태그를 객체로 가져오는 방법)](#03-html-요소를-선택하는-방법html-태그를-객체로-가져오는-방법)  
[04. HTML 태그안에 내용 넣기](#04-html-태그안에-내용-넣기)  
[05. id실험](#05-id실험)  
[06. 메시지박스](#06-메시지박스)  

 JS의 목적 → HTML 제어  

# 01. Javascript 소스코드의 위치

JS코드의 위치 : HTML 어느 위치에나 올 수 있다.  

보통 `<head>`태그 끝과 `<body>`태그 끝에서 사용한다.  

### `<head>`태그에서 JS를 사용하는 경우

1. 웹브라우저가 HTML 파일 실행하면서 JS코드를 인식하고 해석시작  
    - 만약 `<script src=“…”>` 형태로 외부 스크립트 파일을 참조한다면 해당 파일을 다운로드 받기 전까지 해석이 완료되지 않는다.
2. HTML 코드 해석  
3. JS코드 실행하기 위해 다시 JS코드 블록으로 이동  

### `<body>`태그 끝에서 사용하는 경우

1. `<head>`태그에 JS코드가 없기 때문에 웹브라우저가 HTML 코드 바로 해석 시작  
    - `<body>` 안의 내용이 화면에 표시된다.
    - JS파일을 다운로드 or JS 코드 해석 전에 사용자에게 UI를 먼저 제시할 수 있기 때문에 체감 실행 속도가 빨라짐
2. HTML 코드 해석 먼저 끝나고 JS코드 해석후 실행  
    - JS코드를 위해 되돌아갈 필요 없어서 실행속도 단축

# 02. DOM(Document Object Model) : 문서 객체 모델

- 브라우저는 사용자가 띄운 웹문서를 해당 구성과 내용에 맞게 객체화하여 각 요소(텍스트, 버튼, 이미지 등)으로 구조화한다.
- 문서 객체란 `<html>`이나 `<body>` 같은 html문서의 태그들을 JS가 이용할 수 있는 객체(object)로 만들면 그것을 문서 [객체](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))라고 표현한다.
- window의 document(html 문서)이다.
- 브라우저가 웹 문서(HTML)를 이해할 수 있도록 구성된 것
- HTML 문서를 트리구조로 나타낸다.
- JS를 통해 변경할 수 있다.

# 03. HTML 요소를 선택하는 방법(HTML 태그를 객체로 가져오는 방법)

HTML 요소를 다루기 위해서는 해당 요소를 선택해야 한다.  

- HTML 태그 이름(tag name)을 이용한 선택

```jsx
const 객체 = document.getElementsByTagName("태그이름")
```

- 아이디(id)를 이용한 선택

```jsx
const 객체 = document.getElementById("ID이름");
```

- 클래스(class)를 이용한 선택

```jsx
const 객체 = document.getElementsByClassName("CLASS이름");
```

- name 속성(attribute)을 이용한 선택

```jsx
const 객체 = document.getElementsByName("태그 이름(name)의 속성값")
```

- CSS 선택자(selector)를 이용한 선택

```jsx
const 객체 = document.querySelector("CSS선택자");    // 단일 객체  

const 객체 = document.querySelectorAll("CSS선택자"); // 복수 객체  
```

# 04. HTML 태그안에 내용 넣기

- HTML Element 객체는 innerHTML 이라는 속성값을 갖는다.
- 이 값은 시작태그와 끝태그 사이의 내용을 의미한다.

```jsx
const 객체 = document.querySelector("#hello");
객체.innerHTML = "Hello World";
```

- 결과

```jsx
<div id="hello"> Hello World </div>
			     -----------
				  innerHTML
```

# 05-id실험

- CSS는 중복 ID에 대해서 문제 없이 처리함
- JS는 중복 ID가 있을 경우 처리 불가.
- → 가장 첫 번째 항목만을 처리 가능함.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /** CSS는 중복 ID에 대해서 문제 없이 처리함 */
        #hello {
            color: blue;
        }
    </style>
</head>
<body>
    <h1 id="hello">Hello World</h1>
    <h1 id="hello">Hello World</h1>
    <h1 id="hello">Hello World</h1>

    <script>
        // JS는 중복 ID가 있을 경우 처리 불가.
        // --> 가장 첫 번째 항목만을 처리 가능함.
        // document.getElementById("hello").innerHTML = "헬로월드1";
        document.querySelector("#hello").innerHTML = "헬로월드2";
    </script>
</body>
</html>
```

# 06-메시지박스

- `alert(”알림창에 표시할 내용”)` : 사용자가 확인 버튼을 누를 때까지 웹페이지에 알림창을 표시해줌
- confirm(`”알림창에 표시할 내용”`) : 알림창에 확인, 취소 버튼 선택

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="hello">Hello World</h1>
    <h1 id="hello">Hello World</h1>
    <h1 id="hello">Hello World</h1>

    <script>
        alert("Hello JavaScript");

        const choose = confirm("Yes or No?"); // 확인: true리턴, 취소: false 리턴

        if(choose) {
            alert("Yes");
        } else {
            alert("No");
        }
    </script>
</body>
</html>
```
