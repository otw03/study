# flex-grow_flex-basis

# flex-grow

- flex-grow: 1;  
아이템들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나눠 가짐.
- 아이템의 크기 비율을 설정하는 속성
- flex-grow 속성이 적용되지 않거나, 속성 값이 "0" 인 경우 레이아웃 너비보다 아이템들의 너비 합이 더 작으면 아이템 오른쪽 끝에 여백이 남게 된다.

# flex-basis

- flex-basis: 0;  
0외에 1 이상의 숫자가 들어가면 해당 아이템이 원래 크기보다 커지면서 빈 공간을 메워주는 속성.
- 플렉스 아이템의 초기 크기를 지정.

---

- flex-grow 와 flex-basis 예시

```css
#toms_about_btn ul li {width: auto; margin-right: 10px; flex-grow: 1; flex-basis: 0;}
```

