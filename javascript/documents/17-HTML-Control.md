# 17-HTML 요소 제어 하기
[01. 기본 용어](#01-기본-용어)  
[02. HTML 속성 제어](#02-html-속성-제어)  
[03. CSS 제어](#03-css-제어)  
[- 1) 획득한 객체 CSS속성 접근](#1-획득한-객체-css속성-접근)  
[- 2) 획득한 객체의 CSS클래스 접근](#2-획득한-객체의-css클래스-접근)  
[04. dataset](#04-dataset)  

# 01. 기본 용어

- HTML 태그 : Element
- 값이 있는 속성 : Attribute
- 값이 없는 속성 : Property

# 02. HTML 속성 제어

```jsx
const mytag = document.getElementById("...");

mytag.hasAttribute(name);        //— 속성의 존재 확인.
mytag.getAttribute(name);        //— 속성값을 가져옴.
mytag.setAttribute(name, value); //— 속성값을 변경함.
mytag.removeAttribute(name);     //— 속성값을 제거함.
```

### image.html CSS+html부분

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul class="img-list">
        <li><a href="./img/img01.jpg" title="테스트 이미지 1" class="link"><img src="./img/img01.jpg"></a></li>
        <li><a href="./img/img02.jpg" title="테스트 이미지 2" class="link"><img src="./img/img02.jpg"></a></li>
        <li><a href="./img/img03.jpg" title="테스트 이미지 3" class="link"><img src="./img/img03.jpg"></a></li>
        <li><a href="./img/img04.jpg" title="테스트 이미지 4" class="link"><img src="./img/img04.jpg"></a></li>
        <li><a href="./img/img05.jpg" title="테스트 이미지 5" class="link"><img src="./img/img05.jpg"></a></li>
    </ul>

    <div class="viewer">
        <img src="img/img01.jpg" id="target" />
    </div>
</body>
</html>
```

### image.html script태그 부분01

- `document.querySelectorAll(".link").forEach((v, i) => {`  
<a>태그 5개에 대해 반복
- `v.addEventListener("click", e => {`  
v는 사용자가 선택한 것 개별 적용
- `e.preventDefault();`   
링크에 대한 클릭 이벤트 발생 후 href 속성이 동작하게 된다.  
아래 구문은 링크에 대한 클릭 이벤트 동작 후,  
href 속성이 동작하는 것을 방지한다.  
a 태그에 클릭이벤트 발생하면 필수다 `preventDefalt`

```jsx
<script>
  document.querySelectorAll(".link").forEach((v, i) => {
    v.addEventListener("click", e => {
        e.preventDefault();
    });
  });
</script>
```

### image.html script태그 부분02

- `const src = e.currentTarget.getAttribute("href");`  
클릭된 링크가 갖는 속성값 가져오기  
→ 링크가 가르키는 원본 이미지의 주소  
`e.currentTarget` : 사용자가 선택한 타겟(클릭한 개체)

```jsx
<script>
	const src = e.currentTarget.getAttribute("href");    // --> ./img/img04.jpg
	const title = e.currentTarget.getAttribute("title"); // --> 테스트 이미지4
	console.log(src);
	console.log(title);
	
	const target = document.querySelector("#target");
	target.setAttribute("src", src);
	target.setAttribute("title", title);
</script>
```

# 03. CSS 제어

### 1) 획득한 객체 CSS속성 접근

```jsx
const mytag = document.getElementById("...");

// 내용 적용하기
mytag.style.css관련_프로퍼티 = "값";

// 적용된 내용 조회하기
const css = mytag.style.css관련_프로퍼티
```

css관련_프로퍼티의 이름 규칙은 css에서 -로 표시되던 부분이 없어지고 대문자가 사용된다.  

> ex) [css] background-color --> [js] backgroundColor
> 

### 2) 획득한 객체의 CSS클래스 접근

```jsx
const mytag = document.getElementById("...");

mytag.classList.add(name);      // 클래스 추가
mytag.classList.remove(name);   // 클래스 제거
mytag.classList.toggle(name);   // 클래스 on/off
mytag.classList.contains(name); // 해당 클래스가 존재하는지 여부를 boolean으로 반환
```

### CSS속성 접근 예시1)

```html
<body>
	<div id="box" class="box1"><h1>테스트 영역 입니다.</h1></div>
	<input type="button" id="btn1" value="(폰트)" />
	<input type="button" id="btn2" value="(폰트)" />
</body>
```

### script 영역

- JavaScript 객체로 HTML 요소를 가져오면 style이라는 프로퍼티 객체가 내장된다.  
이 style 객체는 모든 CSS 속성을 프로퍼티로 갖고 있다.  
css에서 "-"를 사용해 표현하던 부분은 카멜표기법(대문자사용)으로 변환하여 적용한다.  
ex) font-family --> fontFamily

```jsx
document.querySelector("#btn1").addEventListener("click", function (e) {
    // id값이 box인 요소
    const box = document.getElementById("box");
    box.style.color = "#ff0000";
});
```

- 화살표형태 축약구문

```jsx
document.querySelector("#btn2").addEventListener("click", (e) => document.getElementById("box").style.color = "#00ff00");
```

### CSS클래스 접근 예시)

- CSS 부분

```css
<style type="text/css">
    .box1 {
        margin: 10px auto;
        border: 5px solid #ccc;
        padding: 30px;
        text-align: center;
    }

    .box2 {
        margin: 10px auto;
        border: 10px solid #ff00ff;
        background-color: #ff0;
        padding: 25px;
        text-align: left;
    }
</style>
```

- HTML 부분

```html
<div id="box" class="box1"><h1>테스트 영역 입니다.</h1></div>
<input type="button" id="btn1" value="(폰트)" />
<input type="button" id="btn2" value="(폰트)" />

<input type="button" id="btn9" value="box1 클래스 적용" />
<input type="button" id="btn10" value="box2 클래스 적용" />
```

- Script 부분

JavaScript 객체로 HTML 요소를 가져오면 className이라는 프로퍼티 객체가 내장된다.  
이 값에 적용하고자 하는 CSS 클래스 이름을 대입한다.  
두 개 이상의 클래스를 복수 적용할 경우 공백으로 구분한 문자열 형식으로 할당  

```jsx
document.querySelector("#btn9").addEventListener("click", (e) => {
    const box = document.getElementById("box");
    box.classList.add("box1");
    box.classList.remove("box2");
});
```

# 04. dataset

### data-* 속성 사용

`data.name` => `data-name` => `dataset.name`  

HTML5부터는 모든 HTML 태그 안에 `data-*` 형식의 속성을 개발자가 필요한 경우 임의로 정의할 수 있다.  
이 속성을 사용하여 HTML 태그 안의 JS에서 활용할 수 있는 정보를 포함시킬 수 있다.  
이 속성들은 javaScript 로 가져온 HTML요소 색체의 dataset 프로퍼티 하위에 포함된다.  

- html부분

```html
<button type="button" class="mybtn" data-name="javaScript" data-age="20" data-color="#f60" data-background="#060">javaScript;20</button>

<button type="button" class="mybtn" data-name="vanilla" data-age="15" data-color="#06f" data-background="#990">vanilla;15</button>

<h1 id="console"></h1>
```

- script 부분

`e.currentTarget.dataset.helloworld = "안녕하세요.";`  
: html 태그에 존재하지 않는 속성을 JS로 추가하는 것은 가능  

`console.log(e.currentTarget.dataset.test);`  
: HTML태그에 없는 속성을 출력하거나 다른 변수에 복사하는 경우 undefined  

```jsx
<script>
  document.querySelectorAll(".mybtn").forEach((v, i) => {
      v.addEventListener("click", (e) => {
          e.currentTarget.dataset.helloworld = "안녕하세요.";

          const name = e.currentTarget.dataset.name;
          const age = e.currentTarget.dataset.age;
          document.getElementById("console").innerHTML = "이름: " + name + ", 나이: " + age/*  + ", 추가된내용: " + e.currentTarget.dataset.helloworld */;

          console.log(e.currentTarget.dataset.test);
      });
  });

  document.querySelectorAll("*[data-color]").forEach((v, i) => {
      v.style.color = v.dataset.color;
  });

  document.querySelectorAll("*[data-background]").forEach((v, i) => {
      v.style.backgroundColor = v.dataset.background;
  });
</script>
```