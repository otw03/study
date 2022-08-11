# animation

### CSS애니메이션을 만드는 법

1. 애니메이션을 지정할 키프레임을 만든 다음, 해당 요소에 `animation-name` 속성을 사용해 키프레임을 연결.  
2. 키프레임 안쪽에는 애니메이션이 진행되는 시간별 모양을 작성해줍니다.  
**0~100%로 나누어 작성, 0%는 from, 100%는 to 키워드로 대체 가능**  
3. name, duration은 필수 속성
- `animation-duration` : 애니메이션이 진행될 시간
- **`animation-delay`** : 진행되기 전, 지연 시간 설정
- **`animation-iteration-count`** : 애니메이션 반복 횟수(미지정시 한번 실행되고 끝,  
infinite: 무한 반복)  
- `animation-direction` : 애니메이션 진행 방향 설정  
reverse : 반대방향 : 끝->시작  
alternate : 시작->끝->시작  

### @keyframes

- 시작, 끝만 있는 경우 사용법  
from : 애니메이션이 시작될 때의 모양을 설정  
to : 애니메이션이 끝날때의 모양을 설정

```css
#box {
    position: absolute;
    width: 100px; height: 100px; background-color: red; 
    position: absolute;
    animation-name: animation01; 
    animation-duration: 4s; 
}
@keyframes animation01 {
    /* 처음, 끝만 있는 경우 */
    from {background-color: yellow;}
    to {background-color: green;}
}
```

- 처음~끝까지 중간과정 포함  
0~100%

```css
#box {
    position: absolute;
    width: 100px; height: 100px; background-color: red; 
    position: absolute;
    animation-name: animation01; 
    animation-duration: 4s; 
    animation-iteration-count: infinite; /* 애니메이션 횟수 */
    animation-direction: alternate; /* alternate는 왔다갔다. reverse는 반대방향 */
}
@keyframes animation01 {
    0% {background-color: red; left: 0; top: 0;}
    25% {background-color: blue; left: 200px; top: 0;}
    50% {background-color: yellow; left: 200px; top:200px; border-radius: 50%;} /* 중간에 동그라미로 변했다가 네모로 돌아가게 함 */
    75% {background-color: green; left: 0; top:200px;}
    100% {background-color: red; left: 0; top: 0;}
}
```

