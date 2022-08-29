# 09-object_Prototype

프로그래밍 언어의 종류에는 **객체지향 언어**와 **절차지향 언어**가 있다.  

그 중 **객체지향 언어**는 **클래스 기반 객체지향**과 **프로토타입 기반 객체지향**으로 구분된다.  

ES5까지의 Javascript는 **프로토타입 기반 객체지향 언어**에 해당한다.  

# 01. 객체의 의미

하나의 변수 안에 비슷한 특성을 갖는 변수와 함수가 내장된 형태.  

객체 안에 내장된 변수를 **멤버변수** 혹은 **프로퍼티**(**속성**)라고 한다.

객체 안애 내장된 함수를 **메서드**라고 한다.  

변수 => 명사적 특성  
함수 => 동사적 특성, 기능  
객체 => 변수, 함수가 내장된 것  

# 02. 생성자 함수

## 1) 생성자 함수 정의하기

함수를 `new` 연산자를 사용하여 호출하는 경우 이 함수는 Javascript에 의해 객체를 만들기 위한 함수로 분류된다.  

```jsx
function helloworld() {
	 ...
}
const h = new helloworld();
```

위와 같이 사용되는 함수를 `생성자(Constructor)`라고 한다.  

생성자를 호출하면서 리턴을 변수는 생성자 함수 자체의 리턴 유무에 상관 없이 객체가 된다.  

화살표 함수 형식은 생성자로 사용할 수 없다.  

## 2) 생성자에 멤버변수 포함시키기

생성자 함수 안에서 `this` 키워드를 통해 정의한 변수는 객체의 멤버변수 역할을 한다.  

멤버변수는 객체 내부에 포함되는 형식으로 존재한다.  

```jsx
function helloworld() {
	 this.x = 5;
	 this.y = 10;
}
const h = new helloworld();
const z = h.x + h.y; // 5 + 10
```

같은 생성자를 통해 할당된 객체는 동일한 자료 구조를 갖지만 각각 다른 정보를 저장할 수 있다.  

### 하나의 생성자를 통해 동일한 구조를 갖는 객체를 여러개 생성한 예

게임에서의 각 유닛(ex: 스타크래프트 유닛별 체력관리)  

### 멤버변수를 갖는 생성자를 통해서 객체 만들기

멤버변수 정의하기  

```jsx
function User() {
    // 일반적을 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
    this._id = null;
    this._email = null;
}
```

생성자를 통한 객체 만들기  

```jsx
const foo = new User();
foo._id = "hello";
foo._email = "hello@javascript.com";
console.log(foo);

const bar = new User();
bar._id = "world";
bar._email = "bar@javascript.com";
console.log(bar);
```

출력결과  

```
User { _id: 'hello', _email: 'hello@javascript.com' }
User { _id: 'world', _email: 'bar@javascript.com' }
```

## 3) 파라미터를 갖는 생성자

객체에 포함되는 멤버변수의 초기값을 설정하기 위한 용도로 생성자 함수는 파라미터를 갖을 수 있다.  

생성자 파라미터를 통해 객체 생성시 초기값을 한번에 설정하면, 객체를 생성한 후 개별적으로 파라미터를 지정하는 것 보다 전체 코드가 축약된다.  

### 파라미터를 멤버변수에 복사하는 생성자.

```jsx
const User2 = function(id, email) {
    this._id = id;
    this._email = email;
}

const foo = new User2("hello", "hello@javascript.com");
const bar = new User2("world", "bar@javascript.com");

console.log(foo);
console.log(bar);
```

출력결과

```
User2 { _id: 'hello', _email: 'hello@javascript.com' }
User2 { _id: 'world', _email: 'bar@javascript.com' }
```

# 02. 메서드

객체에 포함된 함수.  

특정한 목적을 위한 함수가 다수 존재할 때, 이 함수들을 그룹화 해 놓은 형태를 객체로 볼 수 있다.  

## 1) prototype 속성

Javascript의 모든 객체는 `prototype`이라는 속성을 갖는다.  

이 속성을 생성자 함수에 대해 활용하면 생성자 함수에 속한 다른 변수나 함수를 추가할 수 있다. (주로 함수 추가에 사용한다.)  

즉, 먼저 정의된 생성자의 기능을 prototype을 통해 확장할 수 있다.  

```jsx
생성자함수.prototype.메서드이름 = function(파라미터1, 파라미터2, ... 파라미터n) {
	 ...
	 return 돌려줄_값;
}
// 메서드 호출하기
const 객체이름 = new 생성자함수();
const k = 객체이름.메서드이름();
```

### prototype을 활용한 메서드 정의

```jsx
const User3 = function(id, email) {
    this._id = id;
    this._email = email;
};

// 로그인을 수행하는 메서드
User3.prototype.login = function() {
    // 객체안에 속한 메서드 안에서는 생성자가 정의한 멤버변수를 마음껏 활용할 수 있다.
    console.log("로그인 되었습니다. -> id=" + this._id + ", email=" + this._email);
};

// 로그아웃을 수행하는 메서드
User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다. -> id=" + this._id + ", email=" + this._email);
};
```

### 객체 생성하기, 객체 안에 내장된 메서드 호출하기

```jsx
// 객체 생성하기
const student = new User3('학생', 'stud@gmail.com');

// 객체 안에 내장된 메서드 호출하기
student.login();
student.logout();

// 객체 생성하기
const teacher = new User3('강사', 'teac@gmail.com');

// 객체 안에 내장된 메서드 호출하기
teacher.login();
teacher.logout();
```

출력결과  

```
로그인 되었습니다. -> id=학생, email=stud@gmail.com
로그아웃 되었습니다. -> id=학생, email=stud@gmail.com
로그인 되었습니다. -> id=강사, email=teac@gmail.com
로그아웃 되었습니다. -> id=강사, email=teac@gmail.com
```

### 객체가 갖는 멤버변수 수정하기

```jsx
teacher._id = '선생님';
teacher._email = 'teacher@naver.com';
teacher.login();
teacher.logout();
```

출력결과  

```
로그인 되었습니다. -> id=선생님, email=teacher@naver.com
로그아웃 되었습니다. -> id=선생님, email=teacher@naver.com
```

# 03. getter, setter

객체지향에서는 **객체를 통한 멤버변수의 직접 접근**이 멤버변수에 값을 대입하는 과정에서 그 값의 적절성을 판단할 수 없고, **무조건적으로 대입하기 때문에 코드 보안에 부적절**하다고 본다.  

멤버변수에 값을 간접적으로 대입하는 특수한 형태의 함수를 `setter`, 멤버변수의 값을 리턴받기 위해 사용하는 특수한 형태의 함수를 `getter`라고 한다.  

## 1) getter, setter 정의하기

`Object.defineProperty(생성자이름.prototype, 함수이름, {getter,setter 정의})` 형식으로 특정 멤버변수에 대한 `getter, setter`를 정의할 수 있다.  

`getter, setter`는 같은 함수이름을 공유한다.  

```jsx
Object.defineProperty(생성자이름.prototype, "함수이름", {
	 get: function() {
			 ...
			 return this.멤버변수
	 },
	 set: function(파라미터) {
			 ...
			 this.멤버변수 = 파라미터;
	 }
});
```

### 멤버변수 정의

```jsx
function User4() {
    // 멤버변수 정의하기
    // 일반적을 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
    this._id = null;
    this._email = null;
}
```

### getter, setter 정의

```jsx
Object.defineProperty(User4.prototype, 'id', {
    get: function () {
        console.log("id에 대한 getter 호출됨");
        // 멤버변수의 값을 변환하는 기능
        return this._id
    }, 
    set: function (param) {
        console.log("id에 대한 setter 호출됨");
        // 파라미터의 값을 멤버변수에 복사하는 기능
        // 필요하다면 파라미터값을 가공하여 멤버변수에 복사할 수 있다.
        this._id = param;
    }
});

Object.defineProperty(User4.prototype, 'email', {
    get: function() {
        console.log("email에 대한 getter 호출됨");
        return this._email;
    }, 
    set: function(param) {
        console.log("email에 대한 setter 호출됨");
        this._email = param;
    }
});
```

## 2) getter, setter 활용하기

함수이지만 변수처럼 사용한다.  

```jsx
const 객체 = new 생성자이름();

// setter를 호출한다. 대입되는 값은 setter에 전달되는 파라미터.
객체.함수이름 = OOO;

// getter를 호출한다. 멤버변수를 대입하는 것 같지만 실제로는 getter를 호출해서 리턴값을
받는 과정이다.
const 변수 = 객체.함수이름;
```

### 객체 생성하기

```jsx
const friend = new User4();
friend.id = "친구";
console.log(friend.id);

friend.email = "friend@hanmail.net";
console.log(friend.email);
```

출력결과  

```
id에 대한 setter 호출됨
id에 대한 getter 호출됨
친구
email에 대한 setter 호출됨
email에 대한 getter 호출됨
friend@hanmail.net
```

# 04. JSON 구문 형식을 활용한 Prototype 정의

`생성자이름.prototype = { ... }` 형식으로 getter, setter, 메서드 등을 한번에 추가할 수 있다.  

이러한 형식으로 생성자, 멤버변수, getter, setter, 메서드 등이 묶여 있는 단위를 **클래스**라 한다.  

클래스에 정의된 기능을 하나의 변수에 모두 부여한 형태가 **객체**이다.  

## 1) 클래스 완전체 정의하기

### 생성자 정의

생성자는 익명함수 형식으로 정의할 수 도 있다.  

```jsx
function 생성자이름(파라미터1, 파라미터2, ... 파라미터n) {
	 this.멤버변수1 = 파라미터1;
	 this.멤버변수2 = 파라미터2;
	 ...
	 this.멤버변수n = 파라미터n;
}
```

### 생성자와 멤버변수 정의

```jsx
function Member(username, password) {
    this._username = username;
    this._password = password;
}
```

---

### JSON을 활용하여 getter, setter와 메서드 추가하기

```jsx
생성자이름.prototype = {
	 // getter와 setter의 이름은 동일해야 하고, getter/setter 쌍이 멤버변수 수 만큼 정
	의된다.
	 get getter이름() {
			 return this.멤버변수;
	 },
	 set setter이름(파라미터) {
			 this.멤버변수 = 파라미터;
	 },

	 메서드1이름 : function() {
			 ...
	 },

	 메서드n이름 : function() {
			 ...
	 }
};
```

### getter, setter, 메서드 일괄 정의

```jsx
Member.prototype = {
    // 멤버변수 _username에 대한 getter, setter
    get username(){
        return this._username;
    }, 
    set username(param){
        this._username = param;
    }, 

    // 멤버변수 _password에 대한 getter, setter
    get password(){
        return this._password;
    }, 
    set password(param){
        this._password = param;
    }, 

    // 로그인을 수행하는 메서드
    login: function(){
        console.log("[Member] 로그인되었습니다. username=" + this.username + ", password=" + this.password);
    }, 
    logout: function(){
        // 로그아웃이므로 아이디와 비밀번호를 바꿔준다.
        this.username = "";
        this.password = "";
        console.log("[Member] 로그아웃되었습니다. username=" + this.username + ", password=" + this.password);
    }
};

console.log(Member.prototype);
```

출력결과  

```
{
  username: [Getter/Setter],
  password: [Getter/Setter],
  login: [Function: login],
  logout: [Function: logout]
}
```

---

### 정의된 클래스를 통해 객체 생성하기

```jsx
const 객체 = new 생성자이름();
```

좀 더 정확하게 구분하자면  

`const 객체`로 선언된 객체는 `객체 참조 변수`라고 부르고, `new 생성자이름()` 부분에서 생성된 object를 **인스턴스** 라고 한다.  

### 생성자를 통한 객체 생성

```jsx
const member1 = new Member('hello', '1234');
console.log(member1);
```

출력결과  

```
{ _username: 'hello', _password: '1234' }
```

### getter를 통한 멤버변수 반환, 메서드호출

```jsx
// getter를 통한 멤버변수 반환 받기
console.log(member1.username);
console.log(member1.password);

// 메서드 호출
member1.login();
member1.logout();
```

출력결과  

```
hello
1234
[Member] 로그인되었습니다. username=hello, password=1234
[Member] 로그아웃되었습니다. username=, password=
```

### setter를 통한 멤버변수 변경, 메서드호출

```jsx
// setter를 통한 멤버변수 변경
member1.username = "world";
member1.password = "4321";

// 메서드 호출
member1.login();
member1.logout();
```

출력결과  

```
[Member] 로그인되었습니다. username=world, password=4321
[Member] 로그아웃되었습니다. username=, password=
```
