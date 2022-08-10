# media

# 오디오 비디오 태그

### audio/video태그 속성

- controls  
: **영상 제어 장치 on, off (true, false)**

```css
<audio src="../../../WEB_UI/images/day3_images/audio_sample.mp3" controls></audio>
```

- autoplay  
: **자동 재생 (true, false)**
- muted  
: **음소거 (true, false)**

```css
<video src="../../../WEB_UI/images/day3_images/video_sample.mp4" autoplay muted></video>
```

> **Chromium 브라우저는 대부분의 경우 자동 재생을 허용하지 않습니다. 그러나 음소거된 자동 재생은 항상 허용됩니다**.
> 
> 
> video 자동재생이 크로미움 기반의 브라우저에서 2018년 이후로 금지 되었습니다.  
> 자동재생을 하고 싶은 경우에는 autoplay 속성과 함께 muted(음소거)속성을 함께 입력해놔야만 자동재생 가능합니다.  
> 모바일에서는 muted를 해놔도 자동재생 안됩니다.  
> 
- loop  
: **반복 재생 (true, false)**
- preload  
: **페이지 로드 시 비디오 파일 로드 여부**
- width, height  
: **비디오 넓이, 높이. 픽셀(px) 단위이다.**
- poster="파일 이름"  
: **썸네일 주소 설정**

---

### source태그

브라우저 지원 여부에 따라 `source태그`를 사용해 여러 포맷의 비디오 파일을 지정해둡니다.  

**video태그를 지원하지 않는 브라우저에서 표시될 내용인 대체 텍스트(필수 입력 권장)**

```html
<video>
    <source src="../../../WEB_UI/images/day3_images/video_sample.mp4" type="video/mp4">
    <source src="../../../WEB_UI/images/day3_images/video_sample.ogv" type="video/ogg">
    <source src="../../../WEB_UI/images/day3_images/video_sample.webm"type="video/webm">
    이 영상을 보기 위해서는 HTML5를 지원하는 브라우저가 필요합니다.
</video>
```

---

### iframe태그, object태그

`object태그`를 `iframe태그`와 비슷하게 사용합니다. object태그는 html문서, 비디오, 오디오, pdf, 플러그인 등을 넣을 수 있으나 대부분의 브라우저가 플래시, 자바애플릿, 액티브엑스 등을 더이상 지원하지 않아 **점점 사용빈도가 낮아지고 있습니다**. `embed태그` 또한 **사용을 권장하지 않습니다**.   

```html
<iframe src="http://www.nate.com" frameborder="0" width="500px" height="500px"></iframe>
<object data="http://www.nate.com" type="text/html" width="500" height="500"></object>
```

