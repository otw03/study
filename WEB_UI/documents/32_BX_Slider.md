# BX_Slider

- 반응형 jQuery 컨텐츠 슬라이더
- bxSlider는 jQuery 플러그인으로 작성되어 있다.
- 참고사이트 [https://bxslider.com/](https://bxslider.com/)

---

### BX슬라이더의 CSS 파일. CDN 방식으로 불러와서 연결해서 사용.

```css
<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
```

### 제이쿼리 라이브러리 파일. 제이쿼리를 이용하기 위해 설치하는 개념. 이 파일이 있어야만 제이쿼리 문법을 사용할 수가 있다.

```css
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

### BX Slider 스크립트 파일. BX슬라이더의 동작을 짜놓은 코드 파일

```html
<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
```

### CDN 방식은 인터넷이 연결되어 있지 않거나, 파일을 직접 수정하는데는 적합하지 않다.  
파일을 다운로드 받아서 직접 연결

```css
<script src="../day8_js/jquery.bxslider.js"></script>
```

### BX슬라이더를 실제로 실행시켜주는 부분.

`mode: "fade"` 와 같이 옵션을 추가해 줄 수 있다.

```css
<script>
        $(document).ready(function(){
        $('.slider').bxSlider({
            mode: "fade",
            });
        });
    </script>
```

