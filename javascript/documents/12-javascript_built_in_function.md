# 12-자바스크립트 내장기능(내장함수)
[01. isNaN](#01-isnan)  
[02. paseFloat](#02-pasefloat)  
[03. parseInt](#03-parseint)  
[04. encodeURI](#04-encodeuri)  
[05. encodeURIComponent](#05-encodeuricomponent)  
[06. setTimeout](#06-settimeout)  
[07. setInterval](#07-setinterval)  
[08. String](#08-string)  
[- length](#length)  
[- charAt()](#charat)  
[- indexOf()](#indexof)  
[- lastIndexOf()](#lastindexof)  
[- substring()](#substring)  
[- toUpperCase(), toLowerCase()](#touppercase-모든-글자를-대문자로-변환한다)  
[- trim()](#trim-문자열의-앞뒤-공백-지우기)  
[- split()](#split-문자열에-포함된-구분자를-기준으로-문자열을-잘라-배열로-반환한다)  
[- replace()](#replace)  
[- replaceAll()](#replaceall)  
[09. Math](#09-math)  
[- Math.max(), Math.min()](#mathmax)  
[- Math.round(), Math.ceil(), Math.floor()](#mathround)  
[- Math.abs()](#mathabs)  
[- Math.random()](#mathrandom)  
[10. Date1](#10-date1)  
[- 객체의 생성](#new-date-getfullyear-getmonth-getdate-getday-gethours-getminutes-getseconds)  
[11. Date2](#11-date2)  
[- 날짜계산](#날짜계산)  
[12. Number](#12-number)  
[13. Regex 정규표현식](#13-regex-정규표현식)  
[14. Array1](#14-array1)  
[- 배열의 원소를 추가, 삭제, 변경하는 방법](#push--배열의-맨-끝에-요소-추가-파라미터-수-제한-없음)  
[15. Array2](#15-array2)  
[- 배열을 탐색하는 방법](#고전적-방법---반복문을-활용하여-배열의-원소-탐색하기)  
[연습 문제](#연습-문제)  

자바스크립트 치트 시트 wk [https://overapi.com/javascript](https://overapi.com/javascript)

# 01-isNaN

## isNaN(value)

파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다.  
-> 숫자가 아니면 true, 숫자가 맞다면 false  
-> 숫자로 변환 가능한 형식일 경우 false  
Javascript의 다른 모든 값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할 수 없다.  
그래서 NaN 여부를 판별하는 함수가 필요하다.  

### 숫자로 변환할 수 없다고 판단하는 경우

```jsx
console.log(isNan(NaN)); // 참
console.log(isNan(undefined)); // 참
console.log({a:10, b:20}); // 참
console.log(isNan([10,20,30])); // 참
console.log(isNan('blabla')); // 참
console.log(isNan('123ABC')); // 참
```

### 숫자로 변환할 수 있다고 판단하는 경우

```jsx
console.log(isNan(true)); // 거짓 --> 1 
console.log(null); // 거짓 --> 0
console.log(isNan(37)); // 거짓 
console.log(isNan('37')); // 거짓: "37"은 숫자 37로 변환
console.log(isNan('37.37')); // 거짓 --> "37.37"은 숫자 37.37로 변환
console.log(isNan('')); // 거짓: 빈 문자열을 0으로 변환
console.log(isNan(' ')); // 거짓: 공백만으로 구성된 문자열을 0으로 변환
// 빈 문자열 '' or 공백 ' ' => false => 0 => 숫자
```

# 02-paseFloat

## parseFloat(value)

주어진 값에서 변환한 부동소수점 수(실수)를 리턴  
변환할 수 없으면 NaN을 리턴  

### 정상적인 경우

```jsx
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));
```

### NaN을 반환하는 경우

```jsx
console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat('FF2'));
```

# 03-parseInt

## parseInt(value, int)

첫번째 파라미터를 10진 정수값으로 변환한다.  
변환할 수 없다면 NaN을 반환.  
두 번째 파라미터는 value가 어떤 진법인지를 알려주는 값(기본값=10)  
문자열의 선행 공백은 무시함.  
숫자 + 글자 형태의 문자열은 숫자 부분만 취함  
글자 + 숫자 형태의 문자열은 변환 불가 - NaN  
소수점을 포함하고 있을 경우 정수 부분만 취함.  

> 10진법: 0 1 2 3 4 5 6 7 8   9 10 11 12 13 14 15 16 17 18 19 20 21 -> ex) 12  
16진법: 0 1 2 3 4 5 6 7 8   9  A  B  C  D  E  F 10 11 12 13 14 15 -> ex) 0x12  
8진법:  0 1 2 3 4 5 6 7 10 11 12 13 14 15 16 17 20 21 22 23 24 25 -> ex) 0o12
> 

### 15로 변환

```jsx
console.log(parseInt(' 0xF', 16));
console.log(parseInt(' F', 16));
console.log(parseInt('17', 8));
console.log(parseInt('015', 10));       // 따옴표 제거하고 015는 15와 동일
console.log(parseInt(15.99, 10));       // 소수점 이하는 버림
console.log(parseInt('15,123', 10));    // 콤마(,)는 단순 문자열이므로 콤마 이후는 버려진다.
console.log(parseInt('FXX123', 16));              // 16진수 기준 정상숫자인 F는 인식되지만 문자열 X이후로는 버려진다.
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));                // 문자열에서 '*'는 곱하기가 아니라 단순 글자이므로 '*'는 버려진다.
console.log(parseInt('15e2', 10));      // 문자열 'e'이후는 버려진다.
console.log(parseInt('15px', 10));      // 문자열 'px'는 버려진다.
```

### -15로 변환

```jsx
console.log(parseInt('-F', 16));
console.log(parseInt('-0F', 16));
console.log(parseInt('-0XF', 16));
console.log(parseInt(-15.1, 10));
console.log(parseInt(' -17', 8));
console.log(parseInt(' -15', 10));
console.log(parseInt('-1111', 2));
```

### NaN로 변환

```jsx
console.log(parseInt("Hello", 8));      // 전부 숫자가 아님.
```

# 04-encodeURI

## encodeURI(string)

주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(=인코딩)하는 처리  
인코딩하지 않는 문자.  
A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #  

### [잘못된 경우]

```jsx

<a href="자바스크립트.html">click</a>
```

### [올바른 경우]

```jsx
<a href="%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.html">click</a>
```

### 특수문자(예약문자 및 비예약문자)르 변환하지 못하기 때문에 UTF-8 환경에서는 사용이 불가.

```jsx
const enc1 = encodeURI(set1); // ;,/?:@&=+$#
const enc2 = encodeURI(set2); // -_.!~*'()
const enc3 = encodeURI(set3); // ABC abc 123 (공백은 %20 으로 인코딩)
const enc4 = encodeURI(set4);
```

- 인코딩 결과

```jsx
console.group("encodeURI");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();
```

출력 결과

```
encodeURI
  ;,/?:@&=+$#
  -_.!~*'()
  ABC%20abc%20123
  %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
```

- 인코딩 된 문자열을 원래의 문자열로 역변환 (디코딩)

```jsx
console.group("decodeURI");
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();
```

- 출력 결과

```
decodeURI
  ;,/?:@&=+$#
  -_.!~*'()
  ABC abc 123
  자바스크립트
```

# 05-encodeURIComponent

## encodeURIComponent(string)

알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩한다.  
-> URL에 사용해도 문제가 없는 특수문자를 제외하고 모든 글자를 변환  

```jsx
const set1 = ';,/?:@&=+$#' // 예약 문자
const set2 = "-_.!~*'()"; // 비예약 문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = "자바스크립트"
```

- 인코딩

```jsx
const enc1 = encodeURIComponent(set1); // ;,/?:@&=+$#
const enc2 = encodeURIComponent(set2); // -_.!~*'()
const enc3 = encodeURIComponent(set3); // ABC abc 123 (공백은 %20 으로 인코딩)
const enc4 = encodeURIComponent(set4);

console.group("encodeURIComponent");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();
```

- 출력 결과

```
encodeURIComponent
  %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
  -_.!~*'()
  ABC%20abc%20123
  %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
```

- 디코딩 수행

```
console.group("decodeURIComponent");
console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
console.groupEnd();
```

- 출력 결과

```
decodeURIComponent
  ;,/?:@&=+$#
  -_.!~*'()
  ABC abc 123
  자바스크립트
```

# 06-setTimeout

## setTimeout(func, int)

@param - func : 콜백함수  
@param - int : 1/1000초 단위의 시간값  
지정된 함수를 두 번째 인자로 전달된 시간 후에 실행하도록 예약한다. (딜레이 기능)  
setTimeout() 이후의 처리 로직들은 func의 실행 여부와 상관없이 즉시 실행된다.  

```jsx
function foo() {
    for(let i=1; i<10; i++) {
        console.log("2 x " + i + " = " + (i*2));
    }
}

setTimeout(foo, 3000);
console.log("구구단을 외자!!");

// 일반적으로 콜백함수를 별도로 정의하지 않고 즉시 전달한다.
// setTimeout(function(){
setTimeout(() => {
    for(let i=1; i<10; i++) {
        console.log("3 x " + i + " = " + (i*3));
    }
}, 1500);

console.log("프로그램 종료~!!!");
```

- 출력 결과

```
구구단을 외자!!
프로그램 종료~!!! // 여기까지 먼저 실행
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27  // 1.5초후 여기까지 실행
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18  // 3초후 여기까지 실행
```

# 07-setInterval

## setInterval(func, int)

지정된 함수를 두 번째 인자로 전달된 시간마다 한 번씩 호출한다.(타이머기능)  
setInterval() 이후의 처리 로직들은 func의 실행 여부와 상관없이 즉시 실행된다.  
  
타이머를 종료시킬 수 있는 timerid를 반환한다.  
  
이 값을 clearInterval() 함수에 전달하면 타이머가 종료된다.  
   
int는 밀리세컨드(1/1000)초를 의미하는 정수  

```jsx
let count1 = 0;

const timerId = setInterval(() => {
    count1++;
    console.log("[타이머1] " + count1 + "번째 자동 실행");

    if(count1 == 5) {
        console.log("타이머1 종료");
        clearInterval(timerId);
    }
}, 3000);

console.log("타이머1 시작");

let count2 = 0;

const timerId2 = setInterval(() => {
    count2++;
    console.log("[타이머2] " + count2 + "번째 자동 실행");

    if(count1 == 5) {
        console.log("타이머2 종료");
        clearInterval(timerId2);
    }
}, 1000);

console.log("타이머2 시작");
```

- 출력 결과

```
타이머1 시작                   // 3초 간격 반복
타이머2 시작                   // 1초 간격 반복
[타이머2] 1번째 자동 실행
[타이머2] 2번째 자동 실행
[타이머1] 1번째 자동 실행
[타이머2] 3번째 자동 실행
[타이머2] 4번째 자동 실행
[타이머2] 5번째 자동 실행
[타이머1] 2번째 자동 실행
[타이머2] 6번째 자동 실행
[타이머2] 7번째 자동 실행
[타이머2] 8번째 자동 실행
[타이머1] 3번째 자동 실행
[타이머2] 9번째 자동 실행
[타이머2] 10번째 자동 실행
[타이머2] 11번째 자동 실행
[타이머1] 4번째 자동 실행
[타이머2] 12번째 자동 실행
[타이머2] 13번째 자동 실행
[타이머2] 14번째 자동 실행
[타이머1] 5번째 자동 실행
타이머1 종료                   // 5회 호출 종료
[타이머2] 15번째 자동 실행
타이머2 종료                   // 15회 호출 종료
```

# 08-String

## [문자열 처리]

문자열은 그 자체가 객체.  
객체라는 것은 그 안에 멤버변수(프로퍼티)와 메서드(함수)가 내장되어 있음을 의미.  
그러므로 일반적으로 생성하는 문자열 변수 안에는 메서드와 프로퍼티가 자동으로 내장된다.  
const foo =  "Hello, World!";  
foo.메서드()  
문자열 객체에 내장된 메서드들은 변수가 담고 있는 내용을 가공하거나 특정 내용을 추출하는 기능을 갖는다.  
이 기능들의 공통점은 원본 내용은 절대 변하지 않고, 가공 결과를 리턴한다.  

### 변수 형식으로 문자열 만들기

```jsx
const str1 = "Hello World";
console.log(str1);
```

- 출력 결과

```
Hello World
```

### 객체 생성 방식으로 문자열 만들기

```jsx
const str2 = new String("Hello Javascript");
console.log(str2);
```

- 출력 결과

```
[String: 'Hello Javascript']
```

### 기능을 확인하기 위한 문자열의 선언

```jsx
const msg = "Life is roo short, You need Javascript.";
console.log("문자열 : " + msg);
```

- 출력 결과

```
문자열 : Life is roo short, You need Javascript.
```

### length  
문자열의 글자 수를 가져온다.  
--> 공백과 특수문자 포함

```jsx
const len = msg.length;
console.log("문자열의 길이 : " + len);
```

- 출력 결과

```
문자열의 길이 : 39
```

### charAt()  
파라미터로 설정된 위치의 글자를 리턴한다.
--> 위치는 0부터 카운트

```jsx
const str2nd = msg.charAt(2);
console.log("두 번째 글자 : " + str2nd);
```

- 출력 결과

```
두 번째 글자 : f
```

### 모든 문자열은 그 자체로 배열처럼 취급될 수 있다.

```jsx
console.log("두 번째 글자 : " + msg[2]);
```

- 출력 결과

```
두 번째 글자 : f
```

### indexOf()  
파라미터로 전달된 내용이 처음 나타나는 위치를 리턴한다.

```jsx
const p1 = msg.indexOf("f");
console.log("`f`가 처음 나타나는 위치 : " + p1);
```

- 출력 결과

```
`f`가 처음 나타나는 위치 : 2
```

### 단어난 문장으로 검색할 경우 일치하는 내용이 시작되는 첫 글자의 위치를 반환

```jsx
console.log("`short`가 처음 나타나는 위치 : " + msg.indexOf("short"));
```

- 출력 결과

```
`short`가 처음 나타나는 위치 : 12
```

### indexOf에 파라미터가 두 개인 경우,  
두 번째 숫자 값은 첫 번째 파라미터의 글자를 찾기 시작하는 위치를 의미한다.

```
const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i", p2+1);
console.log("`i`가 첫 번째로 나타나는 위치 : " + p2);
console.log("`i`가 두 번째로 나타나는 위치 : " + p3);
```

- 출력 결과

```
`i`가 첫 번째로 나타나는 위치 : 1
`i`가 두 번째로 나타나는 위치 : 5
```

### lastIndexOf()  
파라미터로 전달된 글자가 마지막으로 나타나는 위치를 리턴한다.  
단 이 위치를 문자열의 끝에서 부터 세는 것이 아니라 문자열의 처음부터 센다.  
찾지 못할 경우 -1을 반환.

```jsx
const p4 = msg.lastIndexOf("a");
console.log("`a`의 마지막 위치 : " + p4);
```

- 출력 결과

```
`a`의 마지막 위치 : 31
```

- 응용

```jsx
if(msg.indexOf("Hello") > -1) {
    console.log("Hello가 포함됨");
} else {
    console.log("Hello 가 포함되지 않음.");
}
```

- 출력 결과

```
Hello 가 포함되지 않음.
```

### substring()  
잘라내기 위한 시작 위치와 끝 위치를 파라미터로 설정한다.  
지정된 끝 위치와 직전 글자까지만 잘라낸다.  
두번째 파라미터가 없을 경우 지정된 위치부터 끝까지 자른다.

```jsx
const substring1 =  msg.substring(0, 17);
console.log("문자열 자르기 : " + substring1);

const substring2 =  msg.substring(19);
console.log("문자열 자르기 : " + substring2);
```

- 출력 결과

```
문자열 자르기 : Life is roo short
문자열 자르기 : You need Javascript.
```

### toUpperCase() 모든 글자를 대문자로 변환한다.  
### toLowerCase() 모든 글자를 소문자로 변환한다.  

```jsx
const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환 : " + up);

const low = msg.toLowerCase();
console.log("모든 글자의 소문자 변환 : " + low);
```

- 출력 결과

```
모든 글자의 대문자 변환 : LIFE IS ROO SHORT, YOU NEED JAVASCRIPT.
모든 글자의 소문자 변환 : life is roo short, you need javascript.
```

### trim() 문자열의 앞/뒤 공백 지우기

```
const src1 = "  Hello World  ";
const src2 = src1.trim();
console.log(src1);
console.log(src2);
```

- 출력 결과

```
  Hello World  
Hello World
```

### split() 문자열에 포함된 구분자를 기준으로 문자열을 잘라 배열로 반환한다.

```
const txt = "HTML,CSS,Javascript";
const arr = txt.split(",");
console.log(arr);
```

- 출력 결과

```
[ 'HTML', 'CSS', 'Javascript' ]
```

### replace()  
첫 번째 파라미터의 내용을 두 번째 파라미터로 변경한 결과를 반환한다.  
첫 번째 파라미터와 일치하는 내용이 둘 이상 존재할 경우 첫 번째 항목만 변경한다.

```
const txt2 = txt.replace(",", "$");
console.log(txt2);
```

- 출력 결과

```
HTML$CSS,Javascript
```

### replaceAll()  
첫 번째 파라미터의 내용을 모두 두 번째 파라미터로 변경한 결과를 반환한다.

```jsx
const test = "Hello Javascript, World Javascript";
console.log(test.replaceAll("Javascript", "자바스크립트"));
```

- 출력 결과

```
Hello 자바스크립트, World 자바스크립트
```

# 09-Math

수학적인 속성과 메서드를 가진 내장 객체  
모든 기능이 정적 멤버변수와 정적 메서드를 형태로 제공된다.  
즉, 객체 생성을 하지 않고 클래스 이름으로 직접 접근한다.  

### Math.max()  
(1) 주어진 값 중에서 최대값 (파라미터 수 제한 없음)  
### Math.min()  
(2) 주어진 값 중에서 최소값 (파라미터 수 제한 없음)  

```
var max = Math.max(100, 123, 456, 789, 1000);
console.log("최대값: " + max);

var min = Math.min(100, 123);
console.log("최소값: " + min);
```

- 출력 결과

```
최대값: 1000
최소값: 100
```

### Math.round()  
(3) 소수점 반올림  
### Math.ceil(), Math.floor()  
(4) 소수점 올림과 내림 */ // 날짜 계산할 때 자주 쓴다.

```jsx
var num1 = 3.7146;
console.log("소수점 반올림: " + Math.round(num1));
console.log("소수점 올림: " + Math.ceil(num1));
console.log("소수점 내림: " + Math.floor(num1));
```

- 출력 결과

```
소수점 반올림: 4
소수점 올림: 4
소수점 내림: 3
```

### Math.abs()  
(5) 절대값을 반환

```
var num2 = -123;
console.log("절대값: " + Math.abs(num2));
```

- 출력 결과

```
절대값: 123
```

### Math.random()  
(6) 0~1범위의 난수 발생

```jsx
console.log("난수: " + Math.random());
```

- 출력 결과

```
난수: 0.07659786178953132
```

### 두 수 사이의 난수를 리턴하는 함수

```jsx
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

/** 함수의 결과 확인 */
var rnd = random(0, 9);
console.log("0~9 사이의 난수: " + rnd);
```

- 출력 결과

```
0~9 사이의 난수: 5
```

### 함수의 응용 >> 5자리 인증번호 생성

```jsx
var auth = "";
for(var i=0; i<5; i++) {
    // 문자열과 숫자의 결합은 문자열 결합과 같다.
    auth += random(0, 9);
}
console.log("인증번호: " + auth);
```

- 출력 결과

```
인증번호: 53659
```

# 10-Date1

객체를 생성하는 순간의 시스템 시각이나 생성자 파라미터로 전달된 시각을 플랫폼에 종속되지 않는 형태로 나타낸다.  

### new Date(), getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds()

```jsx
/** 요일의 이름을 저장하고 있는 배열의 생성 */
const days = ['일', '월', '화', '수', '목', '금', '토'];

/** 객체의 생성 */
const date1 = new Date();

/** 년,월,일. 시간,분,초 를 리턴받기 */
const yy = date1.getFullYear();
// 월은 0이 1월 11이 12월을 의미한다.
const mm = date1.getMonth() + 1;
const dd = date1.getDate();

// 0=일요일 ~ 6=토요일의 값이 리턴된다.
const i = date1.getDay();
const day = days[i];

const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

var result = yy + '-' + mm + '-' + dd + ' ' + day + '요일 ' + hh + ':' + mi + ':' + ss;
console.log(result);
```

- 출력 결과

```
2022-9-20 화요일 22:20:15
```

### 날짜를 의미하는 문자열 반환받기  
### toDateString(), toISOString(), toLocaleString(), toLocaleDateString(), toLocaleTimeString()  

```jsx
// 날짜 부분만 나타내는, 사람이 읽을 수 있는 문자열을 반환
console.log(date1.toDateString());

// Date를 나타내는 문자열을 ISO 8601 확장 형식에 맞춰 반환
console.log(date1.toISOString());

// 형식 문자열을 사용해서 Date를 나타내는 문자열을 생성
console.log(date1.toLocaleString());
console.log(date1.toLocaleString('de-DE'));
console.log(date1.toLocaleString('ko-KR'));

// Date의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-DE'));
console.log(date1.toLocaleDateString('ko-KR'));

// Date의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString('de-DE'));
console.log(date1.toLocaleTimeString('ko-KR'));
```

- 출력 결과

```
Tue Sep 20 2022

2022-09-20T13:21:00.122Z

2022. 9. 20. 오후 10:21:00
20.9.2022, 22:21:00
2022. 9. 20. 오후 10:21:00

2022. 9. 20.
20.9.2022
2022. 9. 20.

오후 10:21:00
22:21:00
오후 10:21:00
```

### 특정 날짜를 의미하는 객체 생성

```jsx
// 시각이 없으므로 자정으로 설정된다.
var date2 = new Date(2021, 9, 5);
console.log(date2.toLocaleString('ko-KR'));
```

- 출력 결과

```
2021. 10. 5. 오전 12:00:00
```

### 특정 시점을 의미하는 객체 생성

```jsx
var date3 = new Date(2021, 9, 5, 21, 19, 31); // 년, 월(0~11), 일. 시,분,초
console.log(date3.toLocaleString('ko-KR'));
```

- 출력 결과

```
2021. 10. 5. 오후 9:19:31
```

### 이미 생성된 날짜 객체의 성분 변경  
set[시간을 의미하는 단어]()

```jsx
date3.setYear(2010);
date3.setMonth(1);  // 0부터 시작하므로 2월을 위해서는 1로 설정한다.
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));
```

- 출력 결과

```
2010. 2. 14. 오후 12:16:30
```

# 11-Date2

## 날짜계산

### timestamp 확인하기  
timestamp -> 1970년 1월 1일 자정부터 현재까지 흐른 시간을 초단위로 환산한 값.  
getTime()함수는 timestamp를 밀리세컨드단위로 환산하여 반환한다.

```jsx
const date = new Date();
const ts1 = date.getTime();
console.log(ts1);
```

- 출력 결과

```
1663680539874
```

### 며칠이 지났는지 계산하기

```jsx
const prevDate = new Date(date.getFullYear(), 0, 1);
const ts2 = prevDate.getTime();
const tmp1 = ts1 - ts2;
console.log(tmp1);

// 계산 결과를 원하는 단위로 환산 --> 24시간 * 60분 * 60초 * 1000
// 과거의 시점으로부터 지나온 시간을 계산할 경우 소수점을 내린다.
const day1 = Math.floor(tmp1 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day1 + "일 지났습니다.");
```

- 출력 결과

```
22717797916
올해는 262일 지났습니다.
```

### 며칠이 남았는지 계산하기

```jsx
const nextDay = new Date(date.getFullYear(), 11, 31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;

//미래의 시점으로 남은 시간을 계산할 경우 소수점을 올린다.
const day2 = Math.ceil(tmp2 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day2 + "일 남았습니다.");
```

- 출력 결과

```
올해는 102일 남았습니다.
```

### 지금으로부터 30일 후  
단위가 수용할 수 있는 값이 초과될 경우 자동으로 올림 처리한다.

```jsx
const a = date.getDate() + 30;
date.setDate(a);
console.log(date.toLocaleString('ko-KR'));  // 9.31은 없기 때문에 10.1로 자동 조정 해줌.
```

- 출력 결과

```
2022. 10. 20. 오후 10:31:39
```

### 30일이 지난 후에서 다시 100일 전을 계산

```jsx
const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));
```

- 출력 결과

```
2022. 7. 12. 오후 10:31:39
```

### 응용

```jsx
// 오늘 날짜 객체
const today = new Date();
// 이번달의 1일로 이동
today.setDate(1);
// 이번달 1일에 대한 요일 인덱스
const startDay = today.getDay();
console.log(startDay);

// 이번달의 마지막날은 며칠인지 구함. -> 다음달의 0번째 날짜를 구함.
const m = today.getMonth();
today.setMonth(m + 1);
today.setDate(0);       // 10.0 => 10.1의 전날 => 9.30
const lastDate = today.getDate();
console.log(lastDate);
```

- 출력 결과

```
4
30
```

### 06-Array - 12-순차적으로_증가하는_원소.js의 응용

```jsx
// 6행 7열의 빈 배열 만들기 : 한달의 달력은 6행 7열이 넘지 않는다.
var data = new Array(6);
for(let i=0; i<data.length; i++) {
    data[i] = new Array(7);
}

// 1씩 증가할 값
let counter = 1;

for(let i=0; i<data.length; i++) {
    for(let j=0; j<data[i].length; j++) {
        if(i == 0 && j < startDay || counter > lastDate) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

console.log(data);
```

- 출력 결과

```
[
  [
    0, 0, 0, 0,
    1, 2, 3
  ],
  [
    4, 5,  6, 7,
    8, 9, 10
  ],
  [
    11, 12, 13, 14,
    15, 16, 17
  ],
  [
    18, 19, 20, 21,
    22, 23, 24
  ],
  [
    25, 26, 27, 28,
    29, 30,  0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ]
]
```

### 위의 결과 출력하기

```jsx
// "\t" -> 탭키
// "\n" -> 줄바꿈
for(let i=0; i<data.length; i++) {
    let str = "";
    for(let j=0; j<data[i].length; j++) {
        if(data[i][j] == 0) {
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }

    console.log(str);
}
```

- 출력 결과

```
                1	  2	  3	
4  	5	  6	  7	  8	  9	  10	
11	12	13	14	15	16	17	
18	19	20	21	22	23	24	
25	26	27	28	29	30
                           
```

# 12-Number

Number는 숫자 처리와 관련된 기본 기능들을 제공하는 내장 클래스.  

### 객체의 생성  
typeof  객체의 타입 확인하기

```jsx
var a = new Number(123);    // a === 123은 false
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);
```

- 출력 결과

```
[Number: 123]
object
true
false
```

### Number() 함수를 통해 반환받는 값은 객체가 아닌 일반 숫자  
Number() 함수는 parseFloat, parseInt와 비슷한 기능

```jsx
var b = Number('123');    // b === 123은 true
console.log(b);
console.log(typeof b);
console.log(b === 123);

var c = Number('123.45');    // b === 123.45은 true
console.log(c);
console.log(typeof c);
console.log(c === 123.45);
```

- 출력 결과

```
123
number
true

123.45
number
true
```

## (정적)속성

### Number.MAX_VALUE : 표현 가능한 가장 큰 양수.  
Number.MIN_VALUE : 표현 가능한 가장 작은 양수. 즉, 0보다 크지만 0에 가장 가까운 양수.  
Number.NaN, Number.NaN : "숫자가 아님"을 나타내는 특별한 값.

```jsx

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.NaN);
console.log(isNaN(Number.NaN));
```

- 출력 결과

```
1.7976931348623157e+308
5e-324
NaN
true
```

## (정적)메서드

### Number.isNaN()  
: 주어진 값이 NaN인지 확인 (isNaN과 동일)  
숫자 변환이 불가능하면 true, 가능하면 false  
Number.isInteger() : 주어진 값이 정수 인지 확인  
Number.parseFloat()  
: 내장 함수 parseFloat()와 동일  
앞에서 고개한 Number() 함수와 동일  
Number.parseInt() : 내장 함수 parseInt()와 동일

```jsx

console.log(Number.isNaN('123'));

console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));

console.log(Number.parseFloat('123'));

console.log(Number.parseInt('123'));
```

- 출력 결과

```
false
false
true
123
123
```

# 13-Regex 정규표현식

문자열의 형식을 의미하는 수식.  
문자열이 특정 조건을 충족하는지 검사하거나 특정 패턴의 문자열을 검색, 치환하기 위해 사용함.  

`const 변수명 = /정규표현식/`  
변수명.test(검사할 문자열) --> 문자열이 정규표현식에 부합할 경우 true 반환함.  

```jsx
// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.
const username = "자바스크립트";
const age = '20';
const userid = "js123";

// 이름의 한글 입력 검사
const pattern1 =  /^[ㄱ-ㅎ가-힣]*$/;
// username이 pattern1 정규식에 부합하지 않는다면?
if(!pattern1.test(username)) {
    console.log("이름은 한글만 입력 가능합니다.");
}

// 나이의 숫자 입력 검사
const pattern2 = /^[0-9]*$/;
if(!pattern2.test(age)) {
    console.log("나이는 숫자만 입력 가능합니다.");
}

// 아이디의 영문+숫자 검사
const pattern3 = /^[a-zA-Z0-9]*$/;
if(!pattern3.test(userid)) {
    console.log("아이디는 영어+숫자 조합으로만 입력 가능합니다.");
}

// 아이디의 최대 글자 수 검사
if(userid.length > 20) {
    console.log("아이디는 최대 20자 까지만 입력 가능합니다.");
}

console.log("검사완료!!");
```

- 출력 결과

```
검사완료!!          // 해당 변수들은 전부 통과되는 조건이기 때문
```

# 14-Array1

배열의 원소를 추가, 삭제, 변경하는 방법  

### .push() : 배열의 맨 끝에 요소 추가 (파라미터 수 제한 없음.)

```jsx
// 테스트를 위한 배열
const data = [10, 20, 30, 40, 50];

data.push(60, 70);
console.log(data);  // -> [10, 20, 30, 40, 50, 60, 70]
```

### .pop() : 마지막 요소를 리턴하고 제거

```jsx
const k = data.pop();
console.log(k);     // -> 70
console.log(data);  // -> [10, 20, 30, 40, 50, 60]
```

### .shift() : 맨 앞 요소를 리턴하고 제거

```jsx
const x = data.shift();
console.log(x);     // -> 10
console.log(data);  // -> [20, 30, 40, 50, 60]
```

### .unshift() : 맨 앞에 요소 추가 (파라미터 수 제한 없음.)

```jsx
data.unshift(0, 10);
console.log(data);  // -> [0, 10, 20, 30, 40, 50, 60]
```

### .splice() : 2번째 위치부터 3개를 잘라서 반환하고 원본에서는 제거

```jsx
const z = data.splice(2, 3);
console.log(z);     // -> [20, 30, 40]
console.log(data);  // -> [0, 10 , 50, 60]
```

### .splice() 응용

0번째 위치부터 2개를 제거하고 그 위치에 다른 요소들을 배치함  
제거한 수보다 추가되는 원소수가 많을 경우 배열이 확장됨. 기존의 원소들은 뒤로 밀림.  
제어한 수보다 추가되는 원소수가 적을 경우 축소됨.  

```jsx
data.splice(0, 2, 'a', 'b', 'c');
console.log(data);  // -> ['a', 'b', 'c', 50, 60]
```

삭제할 원소의 수를 0으로 지정하면 중간 삽입 효과가 있음.  
기존의 원소들은 뒤로 밀려남.  

```jsx
data.splice(3, 0, 'd', 'e');
console.log(data);  // -> ['a', 'b', 'c', 'd', 'e', 50, 60]
```

### .concat() : a에 b와 c를 결합한 새로운 배열을 반환

```jsx
const a =[1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];
const d = a.concat(b, c);
console.log(d); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 배열에서 원하는 원소가 있는지 여부 확인하기

### indexOf(item, from)

```jsx
// arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)을 찾는다.
// 요소를 발견하면 해당 요소의 인덱스를 반환한다.
// arr.lastIndexOf(item, from)는 위 메서드와 동일한 기능을 하는데, 검색을 끝에서부터 시작한다.
// 두 번째 파라미터(from)이 없으면 처음부터 탐색한다.
console.log( arr1.indexOf(0) );  // 1
console.log( arr1.indexOf(false) );  // 2
// 발견하지 못했으면 -1을 반환한다.
console.log( arr1.indexOf(null) );  // -1
```

### includes(item, from)

```jsx
// arr.includes(item, from)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환한다.
console.log( arr1.includes(1) );  // true
console.log( arr1.includes(100) );  // false
```

### indexOf/lastIndexOf 차이

```jsx
// indexOf 메서드는 요소를 찾을 때 완전 항등 연산자 === 을 사용한다는 점에 유의해야 한다.
// false를 검색하면 정확히 false만을 검색하지, 0을 검색하진 않는다.
// 요소의 위치를 정확히 알고 싶은 게 아니고 요소가 배열 내 존재하는지 여부만 확인하고 싶다면 arr.includes를 사용하는 게 좋다.
// includes는 NaN도 제대로 처리한다는 점에서 indexOf/lastIndexOf와 약간의 차이가 있다.

const arr2 = [NaN];
console.log( arr2.indexOf(NaN) );   // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않는다.)
console.log( arr2.includes(NaN) );  // true (NaN의 여부를 확인한다.)
```

# 15-Array2

배열을 탐색하는 방법  

### 고전적 방법 - 반복문을 활용하여 배열의 원소 탐색하기

```jsx
// 테스트를 위한 배열
const arr1 = [10, 20, 30, 40, 50 ];

/**
 * 고전적 방법 - 반복문을 활용하여 배열의 원소 탐색하기
 */
for(let i=0; i<arr1.length; i++) {
    if(i == 3) {
        console.log(' ~~~ 반복중단!!!');
        break;
    }
    console.log('%d번째 원소 ==> %d', i, arr1[i]);
}

console.log('--------------------');
```

- 출력 결과

```
0번째 원소 ==> 10
1번째 원소 ==> 20
2번째 원소 ==> 30
 ~~~ 반복중단!!!
--------------------
```

### forEach 메서드를 활용하여 배열의 모든 원소 탐색.

- 콜백함수에게 배열의 값과 인덱스를 전달한다.
- 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
- 원소수만큼 호출됨.  
v => 원소: 10~50, i => 인덱스: 0~4  
각 원소의 탐색은 독립적으로 수행.
- break는 for, while문에서만 사용 가능하기 때문에 함수 안에서는 사용할 수 없다.
- forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.

```jsx
const arr2 = [10, 20, 30, 40, 50];

arr2.forEach((v, i) => {
    if(i == 3) {
        console.log(' ~~~ 반복중단!!!');
        // break는 for, while문에서만 사용 가능하기 때문에 함수 안에서는 사용할 수 없다.
        //break;
        // forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
        return;
    }
    console.log('%d번째 원소 ==> %d', i, v);
});

console.log('--------------------');
```

- 출력 결과

```
0번째 원소 ==> 10
1번째 원소 ==> 20
2번째 원소 ==> 30
 ~~~ 반복중단!!!
4번째 원소 ==> 50
--------------------
```

### 탐색을 중단하는 기능을 제공하는 some함수

some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.  

```jsx
const arr3 = [10, 20, 30, 40, 50];

arr3.some((v, i) => {
    if(i == 3) {
        console.log(' ~~~ 반복중단!!!');
        return true;
    }
    console.log('%d번째 원소 ==> %d', i, v);
});

console.log('--------------------');
```

- 출력 결과

```
0번째 원소 ==> 10
1번째 원소 ==> 20
2번째 원소 ==> 30
 ~~~ 반복중단!!!
--------------------
```

### .map() : 배열의 원소를 가공하여 새로운 배열 만들기

map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장  
hello는 반드시 원본 배열과 같은 길이를 갖는 배열이다.  
리턴하지 않은 index에 대한 원소는 undefined가 된다.  

```
// map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
// hello는 반드시 원본 배열과 같은 길이를 갖는 배열이다.
// 리턴하지 않은 index에 대한 원소는 undefined가 된다.
const arr4 = [10, 20, 30, 40, 50];
const hello = arr4.map((v, i) => {
    return v * 10;
});

console.log(hello);

// 화살표 함수는 처리로직이 한줄인 경우 "{}"와 ";", "return" 키워드 생략 가능하므로 아래와 같이 표현 가능함
const arr5 = [10, 20, 30, 40, 50];
const world = arr5.map((v, i) => v * 10);

console.log(world);
```

- 출력 결과

```
[ 100, 200, 300, 400, 500 ]
[ 100, 200, 300, 400, 500 ]
```

## 배열 검색

### .find()  
주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못찾으면 undefined를 반환한다.  
찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.

```
const arr6 = [5, 12, 8, 131, 44];

// 주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못찾으면 undefined를 반환한다.
// 찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const found = arr6.find(function (v) {
    // 파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
    console.log(v);

    // v를 우리가 원하는 조건에 충족하는지 검사하여 true/false를 리턴
    // true를 리턴하는 순간 배열의 탐색을 중단한다. (break와 동일한 기능)
    if(v % 2 == 0) {
        // true가 리턴되는 경우 v는 found에 저장된다.
        return true;
    } else {
        // false가 리턴되는 경우 v는 버려진다.
        return false;
    }
});

console.log(found);
```

## 배열에서 특정 조건을 충족하는 원소를 추출하기

### 1) 전통적인 방법

```jsx
const arr7 = [5, 12, 8, 131, 44];
const d1 = [];

for(let i=0; i<arr7.length; i++) {
    if(arr7[i] % 2 == 0) {
        d1.push(arr7[i]);
    }
}
console.log(d1);
```

- 출력 결과

```
[ 12, 8, 44 ]
```

### 2) forEach를 사용하는 방법

```jsx
const arr8 = [5, 12, 8, 131, 44];
const d2 = [];

arr8.forEach((v, i) => {
    if(v % 2 == 0) {
        d2.push(v);
    }
});
console.log(d2);
```

- 출력 결과

```
[ 12, 8, 44 ]
```

### filter()  
callbackFunction의 조건에 해당하는 모든 요소가 있는 배열을 새로 생성하는 기능

`const newArray = arr.filter(callbackFunction(element, index, array), thisArg);`  
filter 함수의 매개변수는 callbackFunction 과 thisArg 입니다.  
callbackFunction에는 3개의 매개변수를 사용할 수 있습니다.  
element : 요소값  
index : 요소의 인덱스  
array : 사용되는 배열 객체  
그리고 thisArg 는 filter에서 사용될 this 값입니다. 선택적으로 사용되며 사용하지 않을 경우
undefined 전달 됩니다.  

```jsx
const arr9 = [5, 12, 8, 131, 44];
const d3 = arr9.filter(function (v, i, arr) {
    console.log('v=%d, i=%d, arr=%s', v, i, arr);

    if(v % 2 == 0) {
        // true가 리턴되는 경우 v는 results(d3) 배열의 원소로 저장된다.
        // true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다.
        return true;
    } else {
        // false가 리턴되는 경우 v는 버려진다.
        return false;
    }
});

console.log(d3);
```

- 출력 결과

```
v=5, i=0, arr=[ 5, 12, 8, 131, 44 ]
v=12, i=1, arr=[ 5, 12, 8, 131, 44 ]
v=8, i=2, arr=[ 5, 12, 8, 131, 44 ]
v=131, i=3, arr=[ 5, 12, 8, 131, 44 ]
v=44, i=4, arr=[ 5, 12, 8, 131, 44 ]
[ 12, 8, 44 ]
```

## 배열 정렬

### sort() : 퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.

배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.

```jsx
arr10.sort();
console.log(arr10);
```

- 출력 결과

```
[ 1, 15, 2 ]
```

### sort 함수도 정렬 조건을 콜백함수로 처리한다.

```jsx
// sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr10.sort(function (a,b) {
    // 정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
    console.log('a=%s, b=%s', a, b);

    // 리턴값이 양수인 경우: a가 b보다 크다
    // 리턴값이 음수인 경우: b가 a보다 크다
    if(a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(arr10);
```

- 출력 결과

```
a=15, b=1
a=2, b=15
a=2, b=15
a=2, b=1
[ 1, 2, 15 ]
```

### reverse() : 역순배치

```jsx
let arr11 = [1, 2, 3, 4, 5];
arr11.reverse();
console.log(arr11);
```

- 출력 결과

```
[ 5, 4, 3, 2, 1 ]
```

## reduce()  
배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환

- accumulator : 직전 콜백이 리턴한 값
- currentValue : 이번 회차에 탐색되는 배열 원소
- index : 이번 회차에 탐색되는 배열 원소의 인덱스 (생략가능)
- array : 배열 원본 (여기서는 arr12자체, 생략가능)
- 최초 실행시 accumulator에는 0번째 원소인 1이 전달되고 currentValue에는 1번째 원소인 2가 전달되며, index는 currentValue에 대한 1이 전달된다.
- 두 번째 실행부터 accumulator에는 이전 회차에서 리턴한 값이 되돌아온다. 그리고 currentValue에는 2번째부터 순서대로 매 실행회차마다 다음 원소가 전달된다.
- 즉, reduce는 배열의 모든 원소를 탐색하면서 누적 결과를 만들고자 할 경우 사용한다.

```jsx
let arr12 = [1, 2, 3, 4, 5];

const result = arr12.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator=${accumulator}, currentValue=${currentValue}, index=${index}`);
    return accumulator + currentValue;
});

console.log(`result = ${result}`);
```

- 출력 결과

```
accumulator=1, currentValue=2, index=1
accumulator=3, currentValue=3, index=2
accumulator=6, currentValue=4, index=3
accumulator=10, currentValue=5, index=4
result = 15
```

### 불필요한 파라미터를 생략하고 코드를 간단히 표현

```jsx
const result2 = arr12.reduce((acc, cur) => acc + cur);
console.log(`result2 = ${result2}`);
```

- 출력 결과

```
result2 = 15
```

### accumulator의 초기값 지정하기

reduce의 콜백함수 다음에 두 번째 인자로 accumulator의 초기값을 설정할 수 있다.  
이 경우 currentValue에는 배열(arr12)의 0번째 요소부터 전달되고 index는 0부터 시작된다.  

```jsx
// 이 경우 currentValue에는 배열(arr12)의 0번째 요소부터 전달되고 index는 0부터 시작된다.
const result3 = arr12.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator=${accumulator}, currentValue=${currentValue}, index=${index}`);
    return accumulator + currentValue;
}, 0);

console.log(`result3 = ${result3}`);
```

- 출력 결과

```
accumulator=0, currentValue=1, index=0
accumulator=1, currentValue=2, index=1
accumulator=3, currentValue=3, index=2
accumulator=6, currentValue=4, index=3
accumulator=10, currentValue=5, index=4
result3 = 15
```

## reduce() 응용

```jsx
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
]

// 전체 확진자 수 구하기
// 객체를 탐색할 때는 accumulator의 초기값을 설정하고 0번째 원소부터 currentValue로 받아야 한다.
const total = covid19.reduce((acc, cur) => acc + cur.active, 0);
console.log(`전체 확진자 수: ${total}`);
console.log(`평균 확진자 수: ${total/covid19.length}`);
```

- 출력 결과

```
전체 확진자 수: 3346
평균 확진자 수: 418.25
```

# 연습 문제
[문제1](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C1.js)  

[문제2](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C2.js)  

[문제3](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C3.js)  

[문제4](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C4.js)  

[문제5](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C5.js)  

[문제6](../../codes/javascript/13-javascript_built_in_function/%EB%AC%B8%EC%A0%9C6.js)  