# margin

# margin 속성

## **margin(마진)**

- margin속성은 요소의 바깥쪽에 들어가는 간격(요소 간 간격)
    - margin-top: 값
    - margin-right: 값
    - margin-left: 값
    - margin-bottom: 값
    - 4 방향에 따로 설정 가능
- 요소 주변의 여백
- margin-top, right, bottom, left 로도 지정 가능

```css
margin: <크기> | <백분률> | auto;
```

---

### 박스의 양 옆에 자동으로 같은 마진을 설정, 박스를 수평중앙정렬. margin: 0 auto;

```css
#box01 {background-color: rgba(0, 0, 0, .1); margin: auto;}
```

### margin값을 한 개만 넣었을 경우 사방에(상,우,하,좌) 10px 값이 동일 적용

```html
#box02 {background-color: rgba(0, 0, 0, .2); margin: 10px;}
```

### margin값을 두 개 넣었을 경우

마주보는 방향을 묶어서 표현  
첫번째 값은 상,하에 10px  
두번째 값은 좌,우에 20px  

```html
#box03 {background-color: rgba(0, 0, 0, .3); margin: 10px 20px;}
```

### margin값을 세 개 넣었을 경우

첫번째 값은 상단에 10px  
두번째 값은 좌,우에 20px(공통 적용, 마주보는 방향을 묶어서 적용)  
세번째 값은 하단에 30px  

```css
#box04 {background-color: rgba(0, 0, 0, .4); margin: 10px 20px 30px;}
```

### margin값을 네 개 넣을 경우

첫번째 값은 상단(12시)에 10px  
두번째 값은 우측(3시)에 20px  
세번째 값은 하단(6시)에 30px  
네번째 값은 좌측(9시)에 40px  

**12시부터 시작해 시계방향으로 적용 / 상>우>하>좌**  
따로 작성시  
margin-top: 10px;  
margin-right: 20px;  
margin-bottom: 30px;  
margin-left: 40px;  

```css
#box05 {background-color: rgba(0, 0, 0, .5); margin: 10px 20px 30px 40px;}
```

---

박스의 상,하단에 10px(마주보는 방향)
좌,우에 auto를 적용(마주보는 방향) 수평중앙정렬
(수직방향에서 auto 불가)

```css
#box06 {background-color: rgba(0, 0, 0, .6); margin: 10px auto;}
```

---

박스의 상단에 0
좌,우에 auto를 적용(마주보는 방향) 수평중앙정렬
하단에 30px

```css
#box07 {background-color: rgba(0, 0, 0, .7); margin: 0 auto 30px;}
```

### 마진 사용 시 주의사항

1. 마진값은 상,하단에서 겹쳐진다(마진 중첩 현상). 큰 값과 작은 값이 겹쳐지면 큰 값만 들어간다.
2. 마진을 자식요소의 상단에 넣는 경우 부모요소가 함께 밀리는 현상이 있을 수 있다.(브라우저마다 다름) 상단에서 간격을 띄워야 하는 경우, 위쪽 요소에서 아래로 밀어주거나 패딩을 이용하세요.  
- 2번 케이스 문제 발생

```css
#mom {width: 500px; height: 500px; background-color: rgba(0, 0, 0, .2);}
#child {width: 500px; height: 500px; background-color: rgba(255, 0, 0, .5); margin-top: 100px;}
```

- 2번 케이스 문제 해결 방법  
padding 넣어준다, 마진 지움

```css
#box01 {width: 500px; height: 500px; background-color: rgba(0, 0, 0, .2); padding-top: 100px;}
#box02 {width: 500px; height: 500px; background-color: rgba(255, 0, 0, .5); /* margin-top: 100px; */ }
```

