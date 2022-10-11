# 21-HTML-Form
[01. form요소의 객체 획득하기](#01-form요소의-객체-획득하기)  
[02. 획득한 form 안의 input 요소 접근](#02-획득한-form-안의-input-요소-접근)  
[03. 획득한 input 요소의 입력값 처리](#03-획득한-input-요소의-입력값-처리)  
[04. 선택 가능한 요소의 제어](#04-선택-가능한-요소의-제어)  
[05. 의 reset, submit 처리](#05-의-reset-submit-처리)  

# 01. `form`요소의 객체 획득하기

### 1) id속성값으로 접근하는 경우

```jsx
// form의 id속성값이 `form_id`인 경우
const myform = document.getElementById("form_id");
```

### 2) name속성값으로 접근하는 경우

```jsx
// form의 name속성값이 `form_name`인 경우
const myform = document.form_name;
```

# 02. 획득한 `form` 안의 `input` 요소 접근

### 1) id속성값으로 접근하는 경우

```jsx
const hello = document.getElementById("input_id");
```

### 2) name속성값으로 접근하는 경우

```jsx
const myform = document.form_name;
const hello = myform.input_name;
```

**name속성값을 사용하는 경우 아래와 같이 축약도 가능함.**

```jsx
const hello = document.form_name.input_name;
```

# 03. 획득한 `input` 요소의 입력값 처리

`**input`요소의 `value` 속성을 사용하여 입력값을 조회하거나 설정할 수 있다.**

```jsx
const myform = document.form_name;
const hello = myform.input_name;
hello.value = "hello world";  // 값의 설정
const msg = hello.value;      // 값의 조회
```

**name속성값을 사용하는 경우 아래와 같이 축약도 가능함.**

```jsx
document.form_name.input_name.value = "hello world";
const msg = document.form_name.input_name.value;
```

**획득한 요소에 대한 값의 입력여부 조회**

```jsx
if (!document.form_name.input_name.value) {
	// 값이 입력되지 않은 경우의 처리
	alert("내용을 입력하세요.");
	document.form_name.input_name.focus();
	return;
}
```

# 04. 선택 가능한 요소의 제어

### 1) 드롭다운의 제어

- `select` 태그로 표현되는 드롭다운 요소는 그 자체가 배열이며  
`option` 태그들이 배열의 요소가 된다.
- 드롭다운 객체에 대한 `selectedIndex`는 선택된 요소의 배열 인덱스를 의미

```jsx
const dropdown = document.form_name.select_name;

// 특정 위치 강제 선택
dropdown.selectedIndex = 2;

// 현재 선택된 요소의 위치
const choice_index = dropdown.selectedIndex;
	
// 현재 선택된 요소의 value값
const choice_value = dropdown[choice_index].value;
```

**주로 첫 번째 `option` 요소는 선택을 요구하기 위한 안내문이 표시되는 경우가 많기 때문에 `selectedIndex` 값이 0인 경우는 선택한 것으로 간주하지 않는다.**  

```jsx
if (dropdown.selectedIndex == 0) {
	... 선택되지 않은 경우의 처리 ...
}
```

### 2) checkbox, radio의 제어

**name속성이 동일한 요소들끼리 하나의 배열로 그룹화 됨.**  

```jsx
const foo = document.form1.myradio[0].value;
```

**checked 프로퍼티를 사용하여 선택 여부를 조회하거나 선택 상태를 강제 설정 할 수 있음.**  

```jsx
// 선택 여부 검사
const foo = document.form1.myradio[0].chekcked;
if (foo) {
	... 선택된 경우의 처리 ...
}

// 강제 선택
document.form1.myradio[0].checked = true;
```

### 배열이라는 특성 때문에 반복문을 통한 제어가 가능.

```jsx
const checkbox = document.form_name.checkbox_name;
const count = 0;   // 선택된 항목의 수

for (const i=0; i<checkbox.length; i++) {
		if (checkbox[i].checked) {
		count++;
		}
}
```

# 05. 의 reset, submit 처리

### 1) reset

```jsx
document.form_name.reset();
```

### 2) submit

- `form`요소의 `action`속성에 지정된 페이지로 사용자의 입력내용을 전송하는 기능.
- <`input type="submit"/`>요소를 클릭하거나 아래의 자바스크립트 구문의 호출을 통해서 구현된다.

```jsx
document.form_name.submit();
```

### 3) submit 이벤트

`form`요소에 onsubmit 이벤트 적용후 데이터 전송을 방지하기 위한 `e.preventDefault()` 처리가 필요하다.  
입력값을 검사한 후 코드 하단부에서 강제로 `submit()` 처리한다.  

```jsx
document.querySelector("폼요소에 대한 selector").addEventListener("submit", e => {
	 e.preventDefault();
	 ...
	 e.currentTarget.submit();
});
```

> 이벤트 리스너에 전달된 콜백함수 안에 에러가 있을 경우 그 이후 부분은 실행되지 않기 때문에 `submit`이 동작하게 되어 페이지가 새로고침되는 현상이 발생한다. 이 경우 한 블록씩 코드를 지워가면서 에러가 발생하는 위치를 찾아야 한다. 이를 방지하기 위해 `e.preventDefault()`를 적용해야 한다.
