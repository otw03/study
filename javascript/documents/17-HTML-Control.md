# 17-HTML 요소 제어 하기
[01. 기본 용어](#01-기본-용어)  
[02. HTML 속성 제어](#02-html-속성-제어)  
[03. CSS 제어](#03-css-제어)  
[- 1) 획득한 객체 CSS속성 접근](#1-획득한-객체-css속성-접근)  
[- 2) 획득한 객체의 CSS클래스 접근](#2-획득한-객체의-css클래스-접근)  

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

