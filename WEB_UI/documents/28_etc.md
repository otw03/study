# 반응형 웹페이지 만들기 실습 기타 내용

### list 앞에 땡땡이 이미지로 넣기, 안쪽으로 들여쓰기(list item)

1. li에 list-style-image 속성을 이용, li 앞에 이미지로 지정하고 margin-left 값으로 밀어준다.  
2. li에 list-style-position 속성을 이용, inside로 바꿔준다(outside가 기본값) 그 뒤에 따라오는 글자자 inline이어야 한다.  
3. li에 background-image로 땡땡이를 넣고, padding-left로 띄워준다.  
4. li에 ::before 선택자를 이용해서 넣는다.  
::before / ::after 선택자의 content 속성에 이미지를 넣으려면  
content: url("이미지경로"); 이렇게 넣으면 된다.  
5. li에 list-style: square;를 이용, color를 변겨해준다. h4와 p에 다시 컬러 재지정 해줘야함  

---

### line-height를 이용해 글자를 수직중앙정렬 시 주의할 점

1. 서체에 따라 다르기 때문에 완벽하게 가운데 정렬됐다고 할 수 없다.  
2. 한 줄 이상 넘어가면 안된다.  

---

### block 속성을 가진 태그(figure)에 높이가 없을 경우

안에 inline 속성을 가진 태그가 들어가면 자식요소만큼의 높이 외에 하단에 간격이 생김.
vertical-align 속성의 기본값이 baseline 이라서 생기는 문제임.
해결 방법 : inline속성을 가진 자식요소의 vertical-align 속성을 top으로 설정.

```css
.main_img img {width: 100%; vertical-align: top;}
```

---

- opacity: 0; 영역을 차지를 하고, 스크린리더가 읽지 못함
- display: none; 스크린리더가 읽지 못함
- font-size: 0; 스크린리더가 읽지 못함

### 이미지 대체 기법

1. 첫번째 방법  
문단 들여쓰기 속성. block속성의 요소에만 적용된다.  

```css
display: block;
text-indent: -99999px;
```

1. 두번째 방법  

```css
position: absolute;
left: -9999px;
```

---

`.main_img` 태그들을 감싸는 부모박스가 없기 때문에 부모박스의 뒤에 가상의 clear박스를 만들어줄 수 없다. (**부모인 `#wrap::after`에 만들어주면 `#footer`의 뒤에 클리어 박스가 만들어짐!**)  
현재는 바로 뒤에 따라오는 #footer 박스에서 float을 clear 해주는 방법이 최선! (또는 **.main_img들을 묶어주는 부모박스를 하나 추가해서 그 박스에 ::after를 이용해 clear**를 해주면 됨!)  

```css
.main_img {width: 46%; margin: 0 2% 50px; float: left;}
```

---

### overflow

부모요소에게 높이가 없는 경우 자식요소가 float으로 떠있으면 부모가 자식의 높이만큼을 인식하지 못함.  
부모요소에게 `overflow: hidden;` 속성을 적용하면 자식요소의 높이만큼을 인식할 수 있다.

```css
#footer {clear: both; overflow: hidden;}
```

---

### 텍스트 넘칠 때 생략 삼총사

(block속성의 요소에 적용해야 된다)

- white-space: nowrap; 줄바꿈여부를 변경(nowrap은 줄바꿈 안 하겠다. 기본값 wrap은 넘치면 줄바꿈해줌)
- overflow: hidden; 넘치는 만큼을 가려주는 속성
- text-overflow: ellipsis; 텍스트가 넘치는 부분을 처리하는 속성. ellipsis가 (...) 생략기호임.

```css
.main_img_caption h4 {font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
```

---

### `object-fit:`

background-size속성과 비슷하게 img 또는 video 태그를 block속성의 태그에 넣었을 때 비율이 안 맞는 경우 채우는 방식을 변경해주는 속성.(CSS3. IE 적용X)

```css
#toms_sns ul li img {
    width: 100%; height: 100%; 
    object-fit: cover;
}
```

---

### address태그(시맨틱태그)는 기본적으로 이탤릭체로 설정되어있음.

---

### li(list item) 을 선택할 때 마지막 요소의 선택은 `:nth-child()` 보다 `:last-child()` 로 처리하는 게 좋다

```css
#fnb ul li:nth-child(3)::after,
#fnb ul li:nth-child(6)::after,
#fnb ul li:last-child::after {content: "";}
/* 3번째, 6번째, 마지막번째 요소의 뒤에 있는 점을 없애주기 위해 content속성에 빈 문자열을 입력 */
```

---

### 이미 float:left 가 적용된 상태에서 줄바꿈을 하는 방법

```css
#fnb ul li:nth-child(4),
#fnb ul li:nth-child(7) {clear: both;}
/* 4번째, 7번째 요소에서 줄바꿈을 해주기 위해 clear: both; 처리*/
```