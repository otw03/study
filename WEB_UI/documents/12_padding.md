# padding

# padding 속성

## **padding(패딩)**

- `padding`속성은 테두리 내부의 요소 콘텐츠 주위에 공간을 생성하는 데 사용
    - `padding-top`
    - `padding-right`
    - `padding-bottom`
    - `padding-left`
- 콘텐츠와 테두리 사이의 여백
- padding-top, right, bottom, left 로도 지정 가능
- 패딩은 요소의 **안쪽 여백**을 넣어주는 속성
축약형으로 사용시 마진과 순서가 같음(`단, auto 제외=>auto가 없기 때문`)
- 박스 안에 있는 인라인 요소(글자, 그림 등...)가 가운데 정렬이 되게 하려면 박스에 text-align: center;로 하면 된다.
- 박스 안에 있는 블록 요소(자식 박스)를 가운데 정렬 시키려면 해당 자식 요소에 margin: auto;를 주면 된다.

### 기본 박스 사이즈

```css
div {width: 200px; height: 200px; background-color: gray; margin-bottom: 10px;}
```

### 상단에서 글자를 50px만큼 띄울 경우, 높이값에서 늘어난 만큼(50px) 빼준다

```css
#box01 {padding: 50px 0 0; height: 150px;}
```

### 좌측에서 글자를 25px만큼 띄울 경우, 너빗값에서 늘어난 만큼 (25px) 빼준다

```css
#box02 {padding: 0 0 0 25px; width: 175px;}
```

### 상하측에서 25px만큼 띄우고, 좌측에서 50px만큼 띄울 경우, 너빗값에서 50px, 높이값에서 50px만큼 빼준다

```css
#box03 {padding: 25px 0 25px 50px; width: 150px; height: 150px;}
```

### 상측에서 35px만큼 띄우고, 우측10px, 하측10px, 좌측에서 20px만큼 띄울 경우, 너빗값에서 30px, 높이값에서 35px 빼준다

```css
#box04 {padding: 35px 10px 10px 20px; width: 170px; height: 165px;}

<!-- 스크롤 추가의 경우 -->
#box04 {padding: 35px 10px 10px 20px; width: 170px; height: 165px; overflow-y: scroll;}
```

### overflow: hidden; 넘치는 콘텐츠를 가려줍니다.  
콘텐츠가 요소(박스)보다 넘치면 넘치는 만큼을 가려주는 속성

```css
#box04 {padding: 25px 0 0 50px; width: 150px; height: 150px; overflow: hidden;}
```

### overflow

- overflow: hidden; 넘치는 콘텐츠를 가려줍니다.
- overflow: scroll; 넘치는 콘텐츠를 스크롤을 나타내어 줍니다.
- overflow-y: scroll; y축으로만 스크롤바가 표시됩니다.
- overflow: auto; 콘텐츠가 넘치면 스크롤 표시, 넘치지 않으면 스크롤 없음
- overflow: visable; (기본값) 흘러넘쳐도 보여줌

### box-sizing 속성

- **box-sizing: content-box;**  
: 패딩, 보더(테두리) 값이 박스의 안쪽으로 들어가면서(크기에 포함되면서) 박스의 크기가 늘어남

```css
#box05 {padding: 10px; border: 10px solid red; box-sizing: content-box;}
```

- **box-sizing: border-box;**  
: 패딩, 보더(테두리) 값이 콘텐츠영역에(너비와 높이 역역의 안쪽으로) 포함되면서 박스 크기값을 자동으로 계산해서 빼주기 때문에 눈에 보이는 크기가 늘어나지 않고 유지됩니다.(늘어난만큼 안 빼줘도 됨)  
단, IE8버전 이하에서는 적용되지 않는 CSS3 속성입니다.

```css
#box06 {padding: 10px; border: 10px solid red;box-sizing: border-box;}
```

