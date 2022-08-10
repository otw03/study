# video_bg

# 페이지 영상 꽉 채우기

- **min**

min-width : 요소의 최소 너비를 설정합니다.  
[`width`](https://developer.mozilla.org/ko/docs/Web/CSS/width)속성의 [사용값](https://developer.mozilla.org/ko/docs/Web/CSS/used_value)이 자신의 값보다 작아지는걸 방지합니다.  

min-height : 속성은 요소의 최소 높이를 설정합니다.  
[`height`](https://developer.mozilla.org/ko/docs/Web/CSS/height)속성의 [사용값](https://developer.mozilla.org/ko/docs/Web/CSS/used_value)이 자신의 값보다 작아지는걸 방지합니다.  

- 위치 조정할 때 %로 주는 경우  
: 웹브라우저 크기가 변할 수 있기 때문

```css
position: absolute;
left: 50%; top: 50%;
```

- **transform**

요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다.  
CSS [시각적 서식 모델](https://developer.mozilla.org/ko/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경합니다.  

transform : trnaslate (x축기준 이동시킬 값 , y축 기준 이동 시킬 값)  

```css
// 현재 element 위치 기준 x축,y축 으로 100px씩 이동 시키는 예제
transform : translate ( 100px, 100px )

// Y축만 이동
transform : translate ( 0 , 100px )

// 혹은
transform : translateY ( 100px )
```

```css
transform: translate(-50%, -50%); /* left: 50%; top: 50%; 준 내용 수정하기 위함 */
```

- `text-align: center;`  
: 텍스트요소 가운데 정렬
- `text-decoration:`  
텍스트에 장식용 선을 추가한다.
    - underline: 기본값. 밑줄
    - none : 밑줄 없애기
    - `text-decoration-line`   
    : `underline`, `line-through` 등 장식의 종류를 설정합니다.
    - `text-decoration-color`   
    : 장식의 색을 설정합니다.
    - `text-decoration-style`   
    : `solid`, `wavy`, `dashed` 등 장식에 사용할 선의 스타일을 설정합니다.
    - `text-decoration-thickness`   
    : 장식에 사용할 선의 두께를 설정합니다.
- inline 속성을 가지고 있는 태그들은 width, height 속성이 적용 안 된다.  
사용하고 싶다면 display: block; 속성을 적용 시켜야 한다.  
block속성 적용시킨 것을 수정하기 위해서는 margin: auto; 로 정렬

```css
width: 100px; height: 100px;
display: block;
margin: auto;
```

