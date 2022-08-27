# 08-함수
[01. 수학적 접근](#01-수학적-접근)  
[02. 자바스크립트에서의 함수 개요](#02-자바스크립트에서의-함수-개요)  
[- 1) 함수 정의하기](#1-함수-정의하기)  
[- 2) 함수의 호출](#2-함수의-호출)  
[- 3) 함수 이름 규칙](#3-함수-이름-규칙)  
[03. 함수가 실행되는데 필요한 조건값](#03-함수가-실행되는데-필요한-조건값)  
[- 1) 수학에서의 의미](#1-수학에서의-의미)  
[- 2) 프로그램에서의 의미](#2-프로그램에서의-의미)  
[- 3) 다중 파라미터](#3-다중-파라미터)  
[- 4) 함수 호출시 파라미터 생략](#4-함수-호출시-파라미터-생략하기)  
[- 5) 파라미터의 기본값 정의](#5-파라미터의-기본값-정의)  
[04. 리턴](#04-리턴)  
[- 1) 수학에서의 리턴](#1-수학에서의-리턴)  
[- 2) JS에서의 리턴](#2-js에서의-리턴)  
[05. 익명함수](#05-익명함수)  
[- 1) 함수를 변수에 대입](#1-함수를-변수에-대입하기)  
[- 2) 익명함수의 예](#2-익명함수)  
[06. 화살표 함수 (arrow function)](#06-화살표-함수-arrow-function)  
[- 1) 익명함수와의 비교](#1-익명함수와의-비교)  
[- 2) 화살표 함수 살펴보기](#2-화살표-함수-살펴보기)  
[07. 콜백함수](#07-콜백함수)  
[08. 재귀함수](#08-재귀함수)  

하나의 키워드에 프로그램 로직을 함축한 형태.  

명령어를 만드는 과정으로 이해할 수 있다.  

이렇게 만들어진 명령어는 **여러 번 재사용**이 가능하다.  

# 01. 수학적 접근

일반적인 수학의 함수는 하나의 수식을 대변하는 특정 키워드를 의미한다.  

아래의 함수가 있을 때 f라는 키워드로 아래와 같이 x+1이라는 수식을 재사용할 수 있으며 이는 아래와 같이 조건값에 따라 각각 다른 결과를 반환하게 된다.  

> f(x) = x + 1
> 

즉, 아래와 같이 수식이 재활용 된다.  

> f(10) = 10 + 1 = 11
> 

# 02. 자바스크립트에서의 함수 개요

## 1) 함수 정의하기

**function** 키워드를 명시하고 함수의 이름을 지정한 후 괄호`()` 를 명시한다.  

그 뒤에 구문을 그룹화 하기 위한 블록 `{}`을 갖는다.  

```jsx
function 함수이름() {
	 ... 명령어 ...
}
```

### 예시)

```jsx
function sayHello() {
    // 두 개의 출력 명령을 내장함.
    console.log("Hello Javascript.");
    console.log("안녕하세요 자바스크립트.");
}
```

## 2) 함수의 호출

함수는 정의하는 것 만으로는 아무런 동작을 하지 않는다.  

반드시 정의된 함수를 실행시키는 명령을 내려야 하는데 이를 **함수를 호출**한다고 한다.  

```jsx
함수이름();
```

### 예시)

```jsx
sayHello();
```

### **함수를 정의하고 호출하기**

```jsx
// 함수 정의하기
function sayHello() {
    // 두 개의 출력 명령을 내장함.
    console.log("Hello Javascript.");
    console.log("안녕하세요 자바스크립트.");
}

// 함수 호출하기
sayHello();

// 정의된 함수는 여러번 재사용 가능함
for(let i=0; i<5; i++) {
    sayHello();
}
```

출력 결과  

```
Hello Javascript.
안녕하세요 자바스크립트.
Hello Javascript.
안녕하세요 자바스크립트.
Hello Javascript.
안녕하세요 자바스크립트.
Hello Javascript.
안녕하세요 자바스크립트.
Hello Javascript.
안녕하세요 자바스크립트.
Hello Javascript.
안녕하세요 자바스크립트.
```

## 3) 함수 이름 규칙

변수와 동일하게 영어, 숫자, 언더바(_)의 조합으로 구성할 수 있으며, 대부분 **동사+명사**의 형태로 구성된다.  

첫 글자는 소문자로 시작하며, 카멜표기법을 사용하는 것이 관례이다.  

---

# 03. 함수가 실행되는데 필요한 조건값

필요에 따라 함수가 실행되는데 필요한 조건값을 정의할 수 있는데, 이를 **파라미터**라고 한다.  

## 1) 수학에서의 의미

> f(x) = x + 1
> 

함수 `f(x)`가 자신이 수행되는데 필요한 조건값 x를 갖는다. 수학에서는 이를 매개변수 혹은 파라미터라고 부른다.  

## 2) 프로그램에서의 의미

### 파라미터 정의 하기

프로그램의 함수도 자신이 실행하는데 필요한 조건값을 함수 정의 과정에서 괄호`()`안에 명시할 수 있으며 이를 파라미터라고  

```jsx
function 함수이름(파라미터) {
	 ... 파라미터를 활용한 프로그램 구문 ...
}
```

### 파라미터를 전달하는 함수 호출

파라미터가 정의된 함수를 호출할 경우 괄호`()`안에 조건에 맞는 값을 전달해야 한다.  

```jsx
함수이름(값);
```

### 파라미터 사용 예시

```jsx
function f(x) {
    let y = x + 1;
    console.log(y);
}

f(100);
f(50);
f(10);
```

출력 결과  

```
101
51
11
```

## 3) 다중 파라미터

필요한 조건 값이 여러 개인 경우 콤마(`,`)로 구분하여 나열할 수 있다.  

정의된 파라미터들은 원칙적으로 함수 호출시 해당 값들을 전달해야 한다.  

### 다중 파라미터 정의 하기

프로그램의 함수도 자신이 실행하는데 필요한 조건값을 함수 정의 과정에서 괄호`()`안에 명시할 수 있으며 콤마로 구분하여 여러 개를 정의할 수 있다.  

```jsx
function 함수이름(파라미터1, 파라미터2, ... 파라미터n) {
	 ... 파라미터를 활용한 프로그램 구문 ...
}
```

### 다중 파라미터를 갖는 함수의 호출

파라미터가 여러개 인 경우 함수를 호출할 때 정의되어 있는 순서대로 값을 전달해야 한다.  

```jsx
함수이름(값1, 값2, ... 값n);
```

### 다중파라미터 예시

```jsx
function sum(x, y, z) {
    let result = x + y + z;
    console.log(result);
}

sum(1, 2, 3);
sum(50, 100, 200);
```

출력 결과  

```
6
350
```

## 4) 함수 호출시 파라미터 생략하기

파라미터를 요구하는 함수라 하더라도 호출시에 필요 없는 값은 마지막 파라미터부터 순차적으로 생략 가능함.  

값이 전달되지 않은 파라미터는 **undefined**로 식별된다.  

```jsx
// 두 개의 파라미터를 갖는 함수 정의
function foo(x, y) {
    console.log("x=" + x + " y=" + y);
    
    // 파라미터가 생략될 수 있으므로 견고한 코드라고 볼 수 없다.
    // let result = x + y;
    
    let result = 0;
    if(x != undefined) { result += x; }
    if(y != undefined) { result += y; }
        
    console.log("result=" + result);
}

foo(100, 200);  // x-> 100, y-> 200
foo(500);       // x-> 500, y-> undefined
foo();          // x-> undefined, y-> undefined
```

출력 결과  

```
x=100 y=200
result=300
x=500 y=undefined
result=500
x=undefined y=undefined
result=0
```

## 5) 파라미터의 기본값 정의

함수 호출시 값이 전달되지 않는 경우를 대비하여 파라미터에 기본값을 정의할 수 있다.  

```jsx
function 함수이름(파라미터1=기본값1, 파라미터1=기본값2, ..., 파라미터n=기본값n) {
	 ...
}
```

### 파라미터 기본값 예시

```jsx
function bar(x=1, y=2) {
    console.log("x=" + x + " y=" + y);
    let result = x + y;
    console.log("result=" + result);
}

bar(100, 200);  // x-> 100, y-> 200
bar(500);       // x-> 500, y-> 2
bar();          // x-> 1, y-> 2
```

출력 결과  

```
x=100 y=200
result=300
x=500 y=2
result=502
x=1 y=2
result=3
```

---

# 04. 리턴

함수가 자신이 만들어낸 결과값을 자신을 호출한 위치로 되돌려 주는 것.  

## 1) 수학에서의 리턴

수학에서의 함수도 자신이 호출된 위치로 결과값을 되돌려 준다.  

> f(x) = x + 1
y = f(5) ← 이 자리에 f(5)의 결과값이 반환된다.
y = 5 + 1
y = 6
> 

## 2) JS에서의 리턴

### 결과값을 리턴하는 함수 정의하기

함수를 구성하는 블록`{}` 안에서 **return** 키워드를 사용하여 값을 전달한다.  

```jsx
function 함수이름(파라미터1, 파라미터2, ... 파라미터n) {
	 ... 파라미터를 활용한 프로그램 구문 ...
	 return 돌려줄_값;
}
```

### 함수 정의 예시)

```jsx
function getTimes(x, y) {
    const z = x * y;
    return z;
}
```

### 리턴값을 다른 변수에 할당

리턴값을 갖는 함수는 그 결과를 다른 변수에 대입할 수 있다.  

```jsx
const 변수 = 함수이름(파라미터1, 파라미터2, ... 파라미터n);
```

### 다른 변수 할당 예시)

```jsx
const a = getTimes(123, 45);
console.log(a);
```

출력 결과  

```
5535
```

### 리턴값을 활용한 새로운 수식 구성

함수의 리턴값을 새로운 수식에 포함시킬 수 있다.  

```jsx
const 변수 = 100 + 함수이름(파라미터1, 파라미터2, ... 파라미터n);
```

### 예시

```jsx
const b = getTimes(123, 45) + 10000;
console.log(b);
```

출력 결과  

```
15535
```

### console.log 활용 예시

```jsx
console.log(getTimes(100, 20));
```

출력 결과  

```
2000
```

### 리턴값을 조건식으로 활용하기

함수의 리턴값과 비교식을 구성하여 조건문으로 사용할 수 있다.  

```jsx
if (함수이름(파라미터1, 파라미터2, ... 파라미터n) > 0) {
	 ...
}
```

### 논리값을 리턴하는 함수의 조건식 활용

함수의 리턴값이 논리값(`true` / `false`)이라면 그 자체를 조건으로 사용할 수 있다.  

```jsx
if (함수이름(파라미터1, 파라미터2, ... 파라미터n)) {
	 // 함수의 리턴값이 true인 경우 실행됨
}
if (!함수이름(파라미터1, 파라미터2, ... 파라미터n)) {
	 // 함수의 리턴값이 false인 경우 실행됨
}
```

### 리턴값을 활용한 반복문

함수의 리턴값을 활용하여 반복문의 조건식을 구성할 수 도 있다.  

```jsx
for (let i = 0; i<함수이름(파라미터1, 파라미터2, ... 파라미터n); i++) {
	 ...
}
```

반복문 예시(JSON)  

```jsx
function sum(k) {
    let x = 0;

    for(let i in k) {
        console.log(i);
        console.log(k[i]);
        x += k[i];
    }

    return x;
}

console.log(sum({국어:80, 영어:70, 수학:60}));
```

출력 결과  

```
국어
80
영어
70
수학
60
210
```

### 함수의 실행 중단

함수가 실행되는 도중 **return** 키워드를 만나면 그 즉시 실행을 종료한다.  

```jsx
function returnBreak(x, y) {
    if(x < 10) {
        return -1;
    }

    if(y < 10) {
        return -2;
    }

    return x + y;
}

// 첫 번째 if문에 의해 처리가 중단되고 -1이 반환됨
console.log( returnBreak(1, 100) );

// 두 번째 if문에 의해 처리가 중단되고 -2이 반환됨
console.log( returnBreak(100, 1) );

// 정상 실행 됨
console.log( returnBreak(100, 20));
```

출력 결과  

```
-1
-2
120
```

---

# 05. 익명함수

## 1) 함수를 변수에 대입하기

자바스크립트는 함수 자체가 객체 형태이기 때문에 다른 변수에 참조시켜 사용할 수 있다.  

```jsx
function 함수이름(...) {
	 ...
}
const 변수 = 함수이름;
```

> 우선 객체를 특수한 기능을 갖는 변수의 한 종류로 이해하기
> 

```jsx
function sayHello(msg) {
    console.log("sayHello: (" + msg + ")");
};

sayHello("안녕하세요 자바스크립트!");

// 함수는 다른 변수에 대입 가능함.
const say = sayHello;

// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say("Hello Javascript");
```

출력 결과  

```
sayHello: (안녕하세요 자바스크립트!)
sayHello: (Hello Javascript)
```

## 2) 익명함수

다른 변수에 참조시킬 목적으로 함수를 정의할 때 부터 이름 없이 정의하는 형태  

전체적인 정의 형태가 **대입문**이므로 블록을 구성하는 중괄호`{}`뒤에 세미콜론(`;`)이 위치해야 한다.  

```jsx
const 변수 = function(...) {
	 ...
};
```

### 익명 함수 예시)

```jsx
const say = function(msg) {
    console.log("sayHello:(" + msg + ")");
};

// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say("Hello Javascript");
```

---

# 06. 화살표 함수 (arrow function)

ES6 버전부터 새롭게 추가된 구문 형식으로 기존의 익명함수 문법을 간단하게 축약하여 사용할 수 있다.  

## 1) 익명함수와의 비교

### 익명함수 형태로 정의한 함수.

익명함수는 변수에 함수를 대입하는 형태로 정의한다.  

```jsx
const 변수 = function(파라미터1, 파라미터2, ... 파라미터n) {
	 ... 처리로직 ...
};
```

### 익명함수 예시)

```jsx
const foo = function(x) {
    for(let i=0; i<x; i++) {
        console.log("Hello World");
    }
}

foo(7);
```

출력 결과  

```
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```

### 화살표 함수 형태로 정의한 동일한 함수

**function** 키워드가 삭제되고 파라미터를 전달하기 위한 소괄호()와 블록을 구성하기 위한 중괄호{} 사이에 => 기호가 추가된다.  

```jsx
const 변수 = (파라미터1, 파라미터2, ... 파라미터n) => {
	 ... 처리로직 ...
};
```

### 화살표함수 예시)

```jsx
const foo = (x) => {
    for(let i=0; i<x; i++) {
        console.log("Hello World");
    }
}

foo(7);
```

출력 결과  

```jsx
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```

## 2) 화살표 함수 살펴보기

### 파라미터가 하나만 존재하는 경우

파라미터를 감싸는 소괄호 `()` 를 생략할 수 있다.  
파라미터가 없거나 두 개 이상인 경우는 소괄호를 `()` 생략할 수 없다.  

```jsx
const 변수 = 파라미터 => {
	 ... 처리로직 ...
};
```

### 파라미터가 하나만 존재예시)

```jsx
const bar = x => {
    for(let i=0; i<x; i++) {
        console.log("Hello World!!");
    }
}

bar(3);
```

출력 결과  

```
Hello World!!
Hello World!!
Hello World!!
```

### 처리 로직이 한 줄만 포함되는 경우

리턴을 위한 구문 한 줄만 포함하는 익명함수를 가정해 보자.  

```jsx
const 변수 = function(파라미터1, 파라미터2, ... 파라미터n) {
	 return 리턴값;
};
```

위와 같은 형태를 화살표 함수로 변경하고자 할 때, 블록을 위한 `{}`를 생략하고 **return** 키워드도 생략할 수 있다.  

```jsx
const 변수 = (파라미터1, 파라미터2, ... 파라미터n) => 리턴값;
```

### 처리 로직 한 줄 변경 전 예시)

```jsx
const hello = (x, y) => {
    return x*y;
};

console.log(hello(100, 400));
```

### 변경 후 예시)

```jsx
const hello = (x, y) => x+y;
console.log(hello(100, 400));
```

출력 결과 동일  

```
500
```

# 07. 콜백함수

다른 코드의 인수로서 넘겨주는 실행 가능한 코드. 즉, 파라미터로 전달되기 위해 사용되는 함수를 말한다.  

어떤 함수 A가 동작하는 과정 중에서 일부에 대한 처리가 상황에 따라 다르게 구성되어야 할 경우, 그 부분을 함수 형태로 묶어 파라미터로 받도록 할 수 있다.  

콜백 함수  

파라미터, 리턴값 --- 함수 => 변수 --> 익명 함수 => 화살표 함수  

1. 독립적인 값  
2. 파라미터 <= 변수  

파라미터로 전달되기 위해 사용되는 함수  

### 콜백함수를 파라미터로 요구하는 함수 정의

```jsx
function something(x, y, cb) {
    // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
    const result = cb(x, y);
    console.group(cb);
    console.log(x + "와 " + y + "의 연산 결과는 " + result);
    console.groupEnd();
}
```

### 콜백함수 유형 1 - 직접 함수를 정의함

```jsx
function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

something(100, 50, plus);
something(100, 50, minus);
```

출력 결과  

```
[Function: plus]
  100와 50의 연산 결과는 150
[Function: minus]
  100와 50의 연산 결과는 50
```

### 콜백함수 유형 2 - 콜백함수를 익명함수 형태로 전달하기

```jsx
something(200, 100, function(a, b) {
    return a * b;
});

something(200, 100, function(a, b) {
    return a / b;
});
```

출력 결과  

```
[Function (anonymous)]
  200와 100의 연산 결과는 20000
[Function (anonymous)]
  200와 100의 연산 결과는 2
```

### 콜백함수 유형 3 - 익명함수를 화살표 함수로 사용

```jsx
something(5, 7, (a, b) => {
    for(let i=a; i<b; i++) {
        console.log("7 x " + i + " = " + (i*7));
    }   // return되는 값이 없기 때문에 result = undefined
});
```

출력 결과  

```
7 x 5 = 35
7 x 6 = 42
[Function (anonymous)]
  5와 7의 연산 결과는 undefined
```

### 함수 로직이 한 줄인 경우 축약된 형태

```jsx
something(5, 7, (a, b) => {
    console.log(a + b); // return되는 값이 없기 때문에 result = undefined
});
```

출력 결과  

```
12
[Function (anonymous)]
  5와 7의 연산 결과는 undefined
12
[Function (anonymous)]
  5와 7의 연산 결과는 undefined
```

### 축약형 예시)

```jsx
something(5, 7, (a, b) => console.log(a + b) );
// return console.log(a + b) 지만 console.log가 return하는 게 없다(undefined).
```

출력 결과  

```
12
[Function (anonymous)]
  5와 7의 연산 결과는 undefined
```


# 08. 재귀함수

함수가 처리로직 내부에서 자기 자신을 호출하는 형태.  

재귀호출은 마지막에 종료 조건을 명시하지 않는다면 무한루프에 빠지게 된다. 그러므로 재귀호출을 구현할 때 가장 먼저 처리해야 할 것은 종료조건을 명시하는 것이다.  

```jsx
function 함수이름(파라미터1, 파라미터2, ... 파라미터n) {
	 if (종료조건) {
			 return 값;
	 } else {
			 // 자기 스스로를 호출한다.
			 함수이름(파라미터1, 파라미터2, ... 파라미터n);
	 }
}
```

## 팩토리얼 구하기

팩토리얼의 수식 정의  

> f(x) = x * f(x-1) (단, x가 1 이하인 경우 1)
> 

```jsx
function f(x) {
    if(x <= 1) {
        console.log(1);
        return 1;
    } else {
        console.log(x + " x " + "f(" + (x-1) + ")");
        return x * f(x-1);
    }
}

const a = f(5);
console.log(a);
```

출력 결과  

```
5 x f(4)
4 x f(3)
3 x f(2)
2 x f(1)
1
120
```

## 재귀함수 구구단

```jsx
function gugu(level, depth=1) {
    if(depth > 9) {
        return;
    } else {
        console.log(level + " x " + depth + " = " + (level * depth));
        gugu(level, depth+1);
    }
}

gugu(5);
```

출력 결과  

```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
```

## 재귀함수 피보나치 수열

> 피보나치수열에서 10번째 항목이 무엇인지 출력  
    0 1 1 2 3 5 8 13 21 34 55 ...  
    f(0) = 0  
    f(1) = 1  
    f(2) = f(1) + f(0) = 1  
    f(3) = f(2) + f(1) = 2  
    f(4) = f(3) + f(2) = 3  
    f(5) = f(4) + f(3) = 5  
    f(6) = f(5) + f(4) = 8  
    f(7) = f(6) + f(5) = 13  
    f(8) = f(7) + f(6) = 21  
    f(9) = f(8) + f(7) = 34  
    f(10) = f(9) + f(8) = 55  
    ...  
    f(n) = f(n-1) + f(n-2)
> 

```jsx
function fibonacci(n) {
    if(n < 2) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(10));
```

출력 결과  

```
55
```
