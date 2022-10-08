# 18-HTML-탐색하기

# 01-부모요소

```html
<ul class="list-group">
    <li class="list-group-item">
        <a href="#" class="find-parent" data-color="#ff6600">parent</a>
        <a href="#" class="find-parents" data-color="#ff6600">parents</a>
    </li>
    <li class="list-group-item">
        <a href="#" class="find-parent" data-color="#0066ff">parent</a>
        <a href="#" class="find-parents" data-color="#0066ff">parents</a>
    </li>
    <li class="list-group-item">
        <a href="#" class="find-parent" data-color="#00aa00">parent</a>
        <a href="#" class="find-parents" data-color="#00aa00">parents</a>
    </li>
</ul>
```

### 1) 부모 요소 찾기  `parentElement`

`const parent = current.parentElement;`  

클릭된 자신의 부모요소를 조회  
→ 여기서는 클릭한 링크가 포함된 `<li>`태그의 객체  

```jsx
// 객체들의 수 만큼 반복처리
document.querySelectorAll('.find-parent').forEach((v, i) => {
    // 각 링크에 click 이벤트를 적용
    v.addEventListener('click', (e) => {
        // click 이벤트 발생시 link의 href, from의 action으로 페이지가 이동하는 것을 방지
        e.preventDefault();

        // 여러 객체들에 대해 반복처리 중이므로 이벤트가 발생한 특정 하나를 코드로는 지정 불가.
        // 이벤트가 발생한 자기 자신을 조회하여 가져온다.
        const current = e.currentTarget;

        // 클릭된 링크의 data-color 속성값을 취득
        const color = current.dataset.color;

        // 클릭된 자신의 부모요소를 조회
        // -> 여기서는 클릭한 링크가 포함된 <li>태그의 객체
        const parent = current.parentElement;

        console.log(parent);

        // 부모의 배경 색상을 변경
        parent.style.backgroundColor = color;
    });
});
```

### 2) 조상 요소 찾기 `closest`

`const parents = current.closest('.list-group');`  

상위 요소들 중에서 주어진 selector를 충족하는 가장 가까운 요소를 검색  
→ IE는 지원하지 않음  

```jsx
// 객체들의 수 만큼 반복처리
document.querySelectorAll('.find-parents').forEach((v, i) => {
    // 각 링크에 click 이벤트를 적용
    v.addEventListener('click', (e) => {
        // click 이벤트 발생시 link의 href, from의 action으로 페이지가 이동하는 것을 방지
        e.preventDefault();

        // 여러 객체들에 대해 반복처리 중이므로 이벤트가 발생한 특정 하나를 코드로는 지정 불가.
        // 이벤트가 발생한 자기 자신을 조회하여 가져온다.
        const current = e.currentTarget;

        // 클릭된 링크의 data-color 속성값을 취득
        const color = current.dataset.color;

        // 상위 요소들 중에서 주어진 selector를 충족하는 가장 가까운 요소를 검색
        // --> IE는 지원하지 않음
        const parents = current.closest('.list-group');

        console.log(parents);

        // 검색된 조상 요소의 배경 색상을 변경
        parents.style.backgroundColor = color;
    });
});
```

# 02-자식요소

```html
<ul id="list">
    <li id="one">One</li>
    <li id="two" class="blue">
        Two
        <ul>
            <li id="a">A</li>
            <li id="b" class="blue">B</li>
            <li id="c" class="red">C</li>
            <li id="d">D</li>
        </ul>
    </li>
    <li id="three">Three</li>
    <li id="four" class="blue">Four</li>
</ul>

<button type="button" id="btn1">상위 ul의 자식들</button>
<button type="button" id="btn2">Two의 하위 ul의 자식들</button>
```

### JS부분 `children`

`console.log(document.querySelector('#list').children);`  
불필요한 요소를 제거하고 하위 Element만 조회  

`const childrenArr = Array.from(children);`  
children으로 획득하는 HTMLCollection은 배열과 비슷한 특성을 갖지만 **그 자체가 배열은 아니기 때문에 배열의 탐색 기능을 활용하기 위해서는 배열로 변환**해야 한다.  

```jsx
document.querySelector('#btn1').addEventListener('click', (e) => {
    // 지정된 요소의 텍스트와 하위 Element를 모두 조회
    // -> 심지어는 코드 줄맞춤을 위한 줄바꿈도 텍스트로 인식(비추)
    console.log(document.querySelector('#list').childNodes);

    // 불필요한 요소를 제거하고 하위 Element만 조회
    console.log(document.querySelector('#list').children);

    // #list의 자식요소들 얻기
    const children = document.querySelector('#list').children;

    // children으로 획득하는 HTMLCollection은 배열과 비슷한 특성을 갖지만 그 자체가 배열은 아니기 때문에 배열의 탐색 기능을 활용하기 위해서는 배열로 변환해야 한다.
    const childrenArr = Array.from(children);
    console.log(childrenArr);

    childrenArr.forEach((v, i) => {
        v.style.backgroundColor = '#0066ff';
    });
});

document.querySelector('#btn2').addEventListener('click', (e) => {
    const childrenArr = Array.from(document.querySelector('#two > ul').children);

    childrenArr.forEach((v, i) => {
        v.style.fontWeight = '900';
    });
});
```

# 03-자손요소

```html
<ul id="post1">
    <li><span class="thumb">1</span></li>
    <li><span class="thumb">2</span></li>
    <li><span class="thumb">3</span></li>
    <li><span class="thumb">4</span></li>
</ul>

<ul id="post2">
    <li><span class="thumb">1</span></li>
    <li><span class="thumb">2</span></li>
    <li><span class="thumb">3</span></li>
    <li><span class="thumb">4</span></li>
</ul>

<button id="btn1" type="button">자손요소</button>
```

### JS부분

객체로 가져온 HTMLElement는 그 하위 요소들을 다시 getElementBy..., querySelector 등의 기능으로 탐색할 수 있다.  

```jsx
// 메서드 체인 방식으로 이벤트 정의.
document.querySelector('#btn1').addEventListener('click', (e) => {
    // ul 태그 가져오기
    const post = document.querySelector('#post1');
    
    // 객체로 가져온 HTMLElement는 그 하위 요소들을 다시 getElementBy..., querySelector 등의 기능으로 탐색할 수 있다.
    post.querySelectorAll('.thumb').forEach((v, i) => {
        v.style.color = '#06f';
        v.style.fontWeight = 'bold';
    });
});
```

# 04-이전,다음

```html
<div class="container">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>
        <button type="button" id="btn1">Prev</button>
        <button type="button" id="btn2">Next</button>
    </span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
</div>
```

### JS부분 `previousElementSibling` , `nextElementSibling`

`current.parentElement.previousElementSibling.style.fontSize = size1 + 'px';`  
자신의 부모에 대한 '**이전**'요소의 style변경  
`current.parentElement.nextElementSibling.style.fontSize = size2 + 'px';`  
자신의 부모에 대한 '**다음**'요소의 style변경  

```jsx
let size1 = 16;
let size2 = 16;

document.querySelector('#btn1').addEventListener('click', (e) => {
    size1 += 2;

    // 클릭된 버튼 자신
    const current = e.currentTarget;
    // 자신의 부모에 대한 '이전'요소의 style변경
    current.parentElement.previousElementSibling.style.fontSize = size1 + 'px';
});

document.querySelector('#btn2').addEventListener('click', (e) => {
    size2 += 2;
    const current = e.currentTarget;
    // 자신의 부모에 대한 '다음'요소의 style변경
    current.parentElement.nextElementSibling.style.fontSize = size2 + 'px';
});
```

