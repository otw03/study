# favicon

# 파비콘(favicon)

### 파비콘 설정(https://www.favicon-generator.org/) : 투명배경, 가장 큰 사이즈 기준으로 만들어서 업로드

경로는 자신의 파일에 맞게 수정해 줘야 한다.

```html
<link rel="apple-touch-icon" sizes="57x57" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../../WEB_UI/images/day7_images/favicon//apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="../../../WEB_UI/images/day7_images/favicon//android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../../WEB_UI/images/day7_images/favicon//favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../../WEB_UI/images/day7_images/favicon//favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../../WEB_UI/images/day7_images/favicon/favicon-16x16.png">
```

### 해당 아이콘의 속성을 설정해주는 용도의 파일

```html
<link rel="manifest" href="../../../WEB_UI/images/day7_images/favicon//manifest.json">
```

### IE10버전의 고정 타일 아이콘 설정

```html
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="../../../WEB_UI/images/day7_images/favicon//ms-icon-144x144.png">
```

### 모바일 크롬 브라우저 툴바영역 컬러 설정

```html
<meta name="theme-color" content="#ffffff">
```

