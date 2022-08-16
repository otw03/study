# viewport_and_mediaquery

# 뷰포트

### 가장 많이 사용하는 뷰포트 속성

웹 페이지 뷰포트의 너비를 스마트폰 화면 너비에 맞추고 초기 화면 배율을 1로 지정합니다.

```html
<meta name="viewport" content="width-device-width, initial-scale=1">
```

- 메타태그 뷰포트 속성 : 디바이스 사이즈에 맞게 표현될 수 있게끔 설정해주는 부분. 모바일(태블릿 버전에서 특히 중요함!)
- `width=device-width` : 장치의 화면 너비를 따르도록 페이지 너비를 설정합니다(장치에 따라 다름).
- `initial-scale=1.0` : 부분은 브라우저에서 페이지를 처음 로드할 때 초기 확대/축소 수준을 설정합니다.

### 뷰포트 단위

vw : 1vw는 뷰포트 너비의 1%  

vh : 1vh는 뷰포트 높이의 1%  

[**뷰포트 크기 알려주는 곳**](https://yesviz.com/devices.php) 링크  

---

# 미디어 쿼리

`@media [ only | not ] 미디어 유형 [ and 조건 ] * [ and 조건 ]`   

only : 미디어 쿼리를 지원하지 않는 웹 브라우저에서는 미디어 쿼리를 무시하고 실행하지 않습니다.  

not : not 다음에 지정하는 미디어 유형을 제외합니다. 예를 들어 not tv라고 지정하면 TV를 제외한 미디어 유형에만 적용합니다.  

and : 조건을 여러 개 연결해서 추가할 수 있습니다.  

- @media 로 미디어쿼리 시작을 알림  
미디어의 종류가 스크린이고, 최대 너비값이 767px 일 때 {} 안의 내용을 실행해라.  
and는 조건이 모두 true일 때 실행

```css
@media screen and (max-width: 767px) {
  body {background: red;}            
}
```

- 미디어 유형이 screen, 최소 너비 768px, 최대 너비 1439px 일 경우 적용할 CSS를 정의하는 구문

```css
@media screen and (min-width: 768px) and (max-width: 1439px) { }
```

  

### **미디어 쿼리의 중단점(break point)**

미디어 쿼리를 작성할 때 **기기의 화면 크기**에 따라 서로 다른 CSS를 적용할 분기점  

모바일, 태블릿, 데스크톱으로 구분합니다.  

모바일 퍼스트 기법 : 모바일을 먼저 고려하여 미디어 쿼리를 작성하는 것  

[https://mediaqueri.es/](https://mediaqueri.es/) 미디어 쿼리 참고 사이트