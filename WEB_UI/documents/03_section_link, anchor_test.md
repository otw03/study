# section_link, anchor_test

# section_link

### 앵커태그를 이용한 페이지 내부 영역 이동

- `id=""` 로 위치 지정 가능
- id 선택자 : #
- `<a href="#">` 는 최상단으로 이동

```html
<p><a href="#seoul">서울</a></p>

<p id="seoul">서울은 비가 옵니다.<a href="#">▲TOP</a></p>
```

---

# anchor_test

### 앵커태그를 이용한 다른 페이지 이동

- 상대경로를 통한 다른 페이지 이동

```html
// 메인 페이지
<body>
    <a href="./hyperlink/page1.html">1페이지</a> | <a href="./hyperlink/sub2/page2.html">2페이지</a> | <a href="./hyperlink/sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 1페이지
<body>
    <a href="../ui_04_anchor_test.html">메인페이지</a> | <a href="./sub2/page2.html">2페이지</a> | <a href="./sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 2페이지
<body>
    <a href="../../ui_04_anchor_test.html">메인페이지</a> | <a href="../page1.html">1페이지</a> | <a href="../sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 3페이지
<body>
    <a href="../../../ui_04_anchor_test.html">메인페이지</a> | <a href="../../page1.html">1페이지</a> | <a href="../../sub2/page2.html">2페이지</a>
    <img src="../../../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>
```

ㅁ