# **Animate_On_Scroll_Library(**AOS**)**

- 기본적으로 스크롤 움직임에 따라 개체에 움직임을 주는 애니메이션의 경우, AOS 라이브러리를 사용하면쉽게 애니메이션을 줄 수 있다.
- AOS 라이브러리는자바스크립트를 깊게 몰라도 쉽게 사용할 수 있다는 장점.
- 참고 사이트 [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

---

- AOS파일 연결

```html
<head>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
```

- 적용할 곳에 `data-aos` 속성을 적용 시킨다.

```
<section id="toms_about" data-aos="fade-up">
```

- `<script>` 는 head에 들어가는 게 원칙이지만 아래에 넣어줌

```html
<head>
</head>
<body>
	<script>
	  AOS.init();
	</script>
</body>
```

