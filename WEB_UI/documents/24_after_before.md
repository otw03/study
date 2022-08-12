# ::after / ::before 가상선택자(전후문자선택자)

# `::after / ::before 가상선택자(전후문자선택자)`

- **선택자의 앞이나 뒤에 가상의 요소를 만들어서 자식요소로 끼워 넣어 줍니다**.  
**content 속성을 사용할 수 있습니다.(다른 선택자에서는 content 속성 사용 불가)**

- **fnb뒤에 가상의 클리어 박스를 만들어서 자식요소로 끼워넣어줌. 눈에 보이게 표시는 하지 않을거기 때문에 content 속성에 빈 문자열("")을 넣음**.

```css
#fnb::after {content: ""; display: block; clear: both;}
```

- **전후문자 선택자를 쓸 때 content 속성은 필수 이다.**
- **아무것도 쓰지 않는다 해도 content:"" 상태로 남겨두시길!!**
- **글자 뿐 아니라 width 와 height, margin, padding등 여러 스타일 속성을 줄 수 있음**