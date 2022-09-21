# 13-예외처리
[01-고전적예외처리](#01-고전적예외처리)  
[02-try,catch](#02-trycatch)  
[03-에러객체1](#03-에러객체1)  
[04-에러객체2](#04-에러객체2)  
[05-예외객체를통한 예외처리](#05-예외객체를통한예외처리)  
[06-사용자정의 에러](#06-사용자정의에러)  
[07-입력값검사](#07-입력값검사)  
[08-비동기 예외처리](#08-비동기예외처리)  

# 01-고전적예외처리

## 조건문을 사용한 고전적 예외처리

개발자가 원하지 않는 상황을 if문으로 대비  
프로그램이 실행되기에 적합하지 않은 파라미터가 전달된 경우 미리 약속된 값을 리턴  
→ 프로그램의 성공 실패 여부를 리턴값으로 판단하는 경우  

```jsx
function foo(x, y) {
    if(x < 0 && y < 0) {
        return 0;
    }
    return x + y;
}
```

```jsx
// 정상 호출 상황
console.log(foo(10, 20));
// 비정상 호출 상황
console.log(foo(-1, -2));
```

- 출력 결과

```
30
0
```

### 비정상 상황에 대한 고전적 처리 방법

```jsx
const k = foo(-1, -2);

// 에러 상황에 대한 대응(메시지 처리)을 함수를 호출하는 곳에서 해야 한다.
if(k == 0) {
    console.log("x와 y가 0보다 작습니다.");
} else {
    console.log(k);
}
```

- 출력 결과

```
x와 y가 0보다 작습니다.
```

# 02-try,catch

### [에러의 종류]

1. Syntax Error : 문법에러. 코딩상의 실수이므로 수정하지 않으면 프로그램이 동작하지 않음.  
2. Runtime Error : 프로그램 작성 과정에서 논리상의 오류로 미처 대응하지 못한 상황이 발생하는 경우.  
→ 처리하지 않을 경우 프로그램이 중단된다.  

## 기본적인 에러 핸들링

먼저, try {...} 안의 코드가 실행된다.  
에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 건너뛴다.  
에러가 있다면, try 안 코드의 실행이 중단되고, catch(err) 블록으로 제어 흐름이 넘어간다.  
변수 err(아무 이름이나 사용 가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.  
finally 는 에러의 발생 여부에 상관 없이 무조건 맨 마지막에 실행되는 블록.  
필요하지 않은 경우 생략할 수 있다.  

```jsx
const data = [1, 2, 3];

console.log('배열 탐색 시작');

try {
    for(let i=0; i<10; i++) {
        console.log(data[i].toFixed(2));
    }

    console.log("try 블록 실행 완료~!!!");
} catch (err) {
    console.group("%s 에러발생", err.name);
    console.error(err.message);
    console.groupEnd();
    // 에러정보 전체
    //console.error(err);
} finally {
    // 에러의 발생 여부에 상관 없이 무조건 맨 마지막에 실행되는 블록.
    // 필요하지 않은 경우 생략할 수 있다.
    console.log("배열 탐색이 종료되었습니다.");
}

// try-catch로 발생할 에러에 대비하면 에러가 발생하더라도 프로그램이 중단되지 않는다.
console.log("프로그램 종료");
```

- 출력 결과

```
배열 탐색 시작
1.00
2.00
3.00
TypeError 에러발생
  Cannot read properties of undefined (reading 'toFixed')
배열 탐색이 종료되었습니다.
프로그램 종료
```

# 03-에러객체1

## 개발자가 직접 정의하는 에러

에러 객체를 생성  
생성자 파라미터로 에러의 내용 전달  

```jsx
let err = new Error("이상한 일이 벌어졌습니다.");
console.log("에러이름: %s", err.name);
console.log("에러내용: %s", err.message);
```

- 출력 결과

```
에러이름: Error
에러내용: 이상한 일이 벌어졌습니다.
```

### throw : 개발자가 직접 에러를 발생시킬 수 있다.

→ 이 구문을 실제 에러로 인식하기 때문에 프로그램이 이 위치에서 중단된다.  

```jsx
throw err;

console.log("프로그램 종료");
```

- 출력 결과

```
file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/tempCodeRunnerFile.js:4
let err = new Error("이상한 일이 벌어졌습니다.");
          ^

Error: 이상한 일이 벌어졌습니다.
    at file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/tempCodeRunnerFile.js:4:11
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
```

# 04-에러객체2

### 개발자가 발생시키는 에러에 대한 예외처리

```jsx
let err = new Error("이상한 일이 벌어졌습니다.");

try {
    // throw구문은 그 자체를 에러로 인식하기 때문에 try-catch 처리가 가능하다.
    throw err;
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

// 에러 상황을 try-catch로 처리했으므로 프로그램이 중단되지 않고 무사히 종료할 수 있다.
console.log("프로그램 종료");
```

- 출력 결과

```
에러이름: Error
에러내용: 이상한 일이 벌어졌습니다.
프로그램 종료
```

# 05-예외객체를통한_예외처리

## 에러 객체를 활용한 예외처리

```jsx
function foo(x, y) {
    if (x < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new Error("x가 0보다 작습니다.")
    }

    if (y < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new Error("y가 0보다 작습니다.")
    }

    return x + y;
}
```

try블록 안의 코드는 최소화 하는 것이 프로그램 효율에 좋다.  
그래서 k값(여기서는 a, b)을 정상적으로 리턴 받았다면 그 결과값을 활용하는 처리는 try블록 밖에서 하는 것이 좋다.  
에러 점검이 끝난 후 try-catch 블록 밖에서 k값을 활용하려면  
변수의 선언 위치가 try블록보다 상위에 위치해야 한다. --> 변수 스코프 규칙  

### 예시1

```jsx
const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
```

- 출력 결과

```
에러이름: Error
에러내용: x가 0보다 작습니다.
```

### 예시2

```jsx
try {
    // 함수를 호출한 위치를 에러로 인식하기 때문에 catch로 이동한다.
    // new Error() 객체가 err로 전달된다.
    b = foo(-1, 10);
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
```

- 출력 결과

```
에러이름: Error
에러내용: x가 0보다 작습니다.
```

### 예시3

```jsx
try {
    // 함수를 호출한 위치를 에러로 인식하기 때문에 catch로 이동한다.
    // new Error() 객체가 err로 전달된다.
    a = foo(10, -1);
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

console.log(a);
console.log(b);
```

- 출력 결과

```
에러이름: Error
에러내용: y가 0보다 작습니다.
null
null
```

# 06-사용자정의_에러

에러의 종류를 세분화 하기 위해 기본 Error클래스의 기능을 확장하여  
개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다.  

### 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제호출해야 한다. --> super(...)

```jsx
class XlessError extends Error {
    // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제호출해야 한다. --> super(...)
    constructor(msg) {
        super(msg);
        super.name = 'XlessError';
    }
}

class YlessError extends Error {
    // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제호출해야 한다. --> super(...)
    constructor(msg) {
        super(msg);
        super.name = 'YlessError';
    }
}

function foo(x, y) {
    if(x < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new XlessError("x가 0보다 작습니다.");
    }

    if(x < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new YlessError("y가 0보다 작습니다.");
    }

    return x + y;
}
```

- try catch1

```jsx
const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
```

- 출력 결과

```
에러이름: XlessError
에러내용: x가 0보다 작습니다.
```

- try catch2

```jsx

try {
    b = foo(-1, 10);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
    console.log(err);
}
```

- 출력 결과

```
에러이름: XlessError
에러내용: x가 0보다 작습니다.
XlessError: x가 0보다 작습니다.
    at foo (file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/tempCodeRunnerFile.js:25:15)
    at file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/tempCodeRunnerFile.js:53:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
```

- try catch3

```jsx

try {
    a = foo(10, -1);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
    console.log(err);
}

console.log(a);
console.log(b);
```

- 출력 결과

```
에러이름: TypeError
에러내용: Assignment to constant variable.
TypeError: Assignment to constant variable.
    at file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/tempCodeRunnerFile.js:64:7
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
null
null
```

# 07-입력값검사

[ExceptionHelper.js](../../codes/javascript/14-exception_handling/helper/ExceptionHelper.js)  

[RegexHelper.js](../../codes/javascript/14-exception_handling/helper/RegexHelper.js)  

---

### 회원가입시 입력받은 값을 가정한 변수

사용자가 입력한 모든 내용은 문자열 변수이다.  

```jsx
import RegexHelper from './helper/RegexHelper.js';

const username = "자바스크립트";
const age = '20';
const userid = 'js123';
```

### 입력값 검사를 수행하기 위한 객체

```jsx
const regex = RegexHelper.getInstance();
```

### 입력값의 형식검사 수행

```jsx
try {
    // regex.value(null, "내용을 입력하세요.");
    regex.kor(username, "이름은 한글로만 입력하세요.");
    regex.maxLength(username, 20, "이름은 최대 20글자까지만 가능합니다.");
    regex.num(age, "나이는 숫자로만 입력하세요.");
    regex.engNum(userid, "아이디는 영어와 숫자의 조합만 가능합니다.");
    regex.maxLength(userid, 20, "아이디는 최대 20글자까지만 가능합니다.");
} catch(err) {
    console.group("%s 에러발생", err.name);
    console.log("에러이름: %d", err.statusCode);
    console.log("에러내용: %s", err.message);
    console.groupEnd();
}

console.log("검사완료!!");
```

- 출력 결과

```
검사완료!!
```

- 출력 결과 (변수가 잘못 입력된 경우)

```
BadRequestException 에러발생
  에러이름: 400
  에러내용: 이름은 한글로만 입력하세요.
검사완료!!
```

# 08-비동기_예외처리

## 비동기 처리에 대한 예외 처리 (1)

try-catch는 동기 방식으로 동작하므로 비동기 방식으로 동작하는 timer처리와 ajax에는 대응하지 못한다.

```jsx
const data = [1, 2, 3];

// try-catch는 동기 방식으로 동작하므로 비동기 방식으로 동작하는 timer처리와 ajax에는 대응하지 못한다.
try {
    setTimeout(() => {
        // ---- 이 부분만 별도의 구역에서 실행되므로 에러가 발생하더라도 try의 영향을 받지 않는다.
        console.log("배열탐색시작");
        for(let i=0; i<10; i++) {
            console.log(data[i].toFixed(2));
        }
        // 에러가 발생하여 프로그램이 중단되므로 이 메시지는 표시되지 않는다.
        console.log("배열탐색종료");
    }, 1000);
} catch (err) {
    // setTimeout()과 같은 비동기 함수는 처리하지 못하기 때문에 이 블록은 실행되지 않는다.
    console.log("에러발생(2)");
    console.error(err);
}

console.log("프로그램 종료");
```

- 출력 결과

```
프로그램 종료
배열탐색시작
1.00
2.00
3.00
file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/08-%EB%B9%84%EB%8F%99%EA%B8%B0_%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC1.js:10
            console.log(data[i].toFixed(2));
                                ^

TypeError: Cannot read properties of undefined (reading 'toFixed')
    at Timeout._onTimeout (file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/08-%EB%B9%84%EB%8F%99%EA%B8%B0_%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC1.js:10:33)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
```

## 비동기 처리에 대한 예외 처리 (2)

timer처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.

```jsx
const data = [1, 2, 3];

// timer처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.

setTimeout(() => {
    try {
        console.log("배열탐색시작");
        for(let i=0; i<10; i++) {
            console.log(data[i].toFixed(2));
        }
    } catch (err) {
        console.log("에러발생(2)");
        console.error(err);
        console.error(err.message);
    }
    // 콜백함수 내부에서 처리된 예외처리는 발생한 에러 상황을 처리할 수 있기 때문에
    // 아래의 코드는 정상적으로 실행된다.
    console.log("배열탐색종료");
}, 1000);

console.log("프로그램 종료");
```

- 출력 결과

```
프로그램 종료
배열탐색시작
1.00
2.00
3.00
에러발생(2)
TypeError: Cannot read properties of undefined (reading 'toFixed')
    at Timeout._onTimeout (file:///c:/Users/otw/Documents/GitHub/study/codes/javascript/14-exception_handling/09-%EB%B9%84%EB%8F%99%EA%B8%B0_%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC2.js:10:33)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7)
Cannot read properties of undefined (reading 'toFixed')
배열탐색종료
```

