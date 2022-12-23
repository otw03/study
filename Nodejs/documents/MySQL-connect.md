# MySQL 연동
[01. MySQL에 사용자 계정 추가하기](#01-mysql에-사용자-계정-추가하기)  
[02. Node.js 데이터베이스 연동](#02-nodejs-데이터베이스-연동)  
[03. SQL Injection(sql 인젝션) 방지](#03-sql-injectionsql-인젝션-방지)  

# 01. MySQL에 사용자 계정 추가하기

### 1) 사용자 계정 생성하기

```powershell
create user '아이디'@'접근허용호스트' identified by '비밀번호';
```

- 계정생성은 mysql root 로그인한 상태에서 가능
- 접근 허용 호스트는 mysql에 접속 가능한 Node.js가 구동중인 머신의 IP주소
- **Node.js와 MySQL이 같은 머신에 설치되어 있는 경우 localhost 라고 기입**
- **서로 다른 머신에 설치되어 있는 경우 접속 출발지의 IP주소(Node.js설치 장비)를 기입**
- 접근허용호스트를 '%'로 지정할 경우 모든 곳에서의 접근을 허용
- 접근허용호스트에서 `localhost` , `127.0.0.1` , `::1` 세 개는 같은 뜻이다

### 2) 데이터베이스에 대한 권한 부여

```powershell
grant all privileges on 데이터베이스이름.* to '아이디'@'접근허용호스트'; 
```

# 02. Node.js 데이터베이스 연동

1) mysql2 패키지 설치

```powershell
yarn add mysql2
```

2) 데이터베이스 접속

```jsx
const mysql = require('mysql2'); // mysql 모듈

// DB 접속 정보 설정
const connectionInfo = {
		host: // MYSQL 서버 주소 (다른 PC인 경우 IP주소),
		port: // MYSQL 포트번호,
		user: // MYSQL의 로그인 할 수 있는 계정이름,
		password: // 비밀번호,
		database: // 사용하고자 하는 데이터베이스 이름
};

// mysql 접속 객체 생성
const dbcon = mysql.createConnection(connectionInfo);

// connect: 데이터베이스 접속 시도 (터미널에서 DB사용자 접속후, use DB하는 과정과 비슷함)
dbcon.connect((error) => {
		if (error) {
				// ... 에러처리 ...
				return;
		}

		// ... 접속 성공시 SQL 처리

});
```

3) 접속 성공시 SQL 처리

```jsx
		// ... 접속 성공시 SQL 처리

		/** INSERT, UPDATE, DELETE 쿼리 생성하기 */
		// 실행할 SQL구문
		// Node의 변수로 치환될 부분(주로 저장, 수정될 값)은 ?로 지정
		// 문자열이더라도 홑따옴표 사용 안 함 (sql인젝션 방지)
		const sql = "INSERT INTO department (dname, loc) VALUES (?, ?)";
		
		// SQL문의 '?' 를 치환할 배열 --> ? 순서대로 값을 지정한다.
		const input_data = ['Node학과', '공학관'];
```

4) SQL 실행하기

```jsx
// SQL 실행하기		

		// query함수가 sql 과 input_data 를 조립해준다. 결과를 (error, result) 로 넘겨줌
		dbcon.query(sql, input_data, (error, result) => {
		    // 이 에러가 감지되는 경우는 SQL문이 잘못 구성되어 MySQL에서 에러가 발생한 경우.
		    if (error) {
		        console.error("SQL문 실행에 실패했습니다.");
		        console.error(error);
		        dbcon.end(); // 데이터베이스 접속 해제(중요)  : 안 해주면 mysql이 node연결이 끊긴걸 모름
		        return;
		    }
		
		    // 저장결과 확인
		    console.log('반영된 데이터의 수: ' + result.affectedRows);

		    // UPDATE, DELETE 쿼리의 경우 사용할 수 없는 값임
		    console.log('생성된 PK값: ' + result.insertId);

		    // 데이터베이스 접속 해제(중요)
		    dbcon.end();
		});

});
```

- `dbcon.end();` 를 안 할 경우

데이터베이스를 따로 접속 해제하지 않으면 Node가 종료된 후에도 MySQL이 접속되어있다.  

MySQL이 Node가 종료된 상태인지 모르기 때문에 접속이 계속 쌓인다.  그러다가 어느순간 Node 접속을 안 받는다.  (제한 200개)  

# 03. SQL Injection(sql 인젝션) 방지

```jsx
const name = "테스트";
const loc = "테스트'IT'";

const sql = `INSERT INTO department (dname, loc) VALUES ('${name}', '${loc})`;
```

sql은 문자열을 홑따옴표로 감싸는데 사용자가 입력한 값이 치환되어서 완전한 sql 문장을 만드는 구조이다.  

치환하는 입력값을 홑따옴표로 감싸면 sql문법 에러가 발생한다.  (홑따옴표가 중복사용되기 때문)  
⇒ 사용자가 시스템의 에러를 유도 가능하다는 뜻 ⇒ 공격  
⇒ sql문이 조합된다는 특성을 이용해서 입력값을 통해 비정상적인 sql문이 실행되게 하는 방법  
⇒ sql 인젝션  

여기어때 사이트가 개인정보가 유출된 방법도 이것때문이다.  

로그인이라는 것은 아이디와 비밀번호가 동시에 일치하는지 검사하는 것  

비밀번호를 `‘ or ‘‘=’` 로 입력하면 아래처럼 SQL문이 완성된다  

```jsx
SELECT * FROM student WHERE userid='otw03' AND idnum='' or ''='' 
```

해당 구문이 입력되면 다 뚫린다  

- sql**구문해석**

AND가 OR 보다 우선한다  

```jsx
SELECT * FROM student WHERE (userid='otw03' AND idnum='') or ''='' 
```

비밀번호가 공백(`’’`)인 데이터는 없다. False  

`''=''` 는 True  

False OR True ⇒ True  

```jsx
SELECT * FROM student WHERE True
```

가 되어서 조건이 충족되는 데이터를 전부 가져온다  

- 방지 방법

**사용자의 입력값은 홑따옴표 입력 못하게 막아야 한다**  

사용자 입력값의 홑따옴표를 역슬래시로 바꿔준다  

홑따옴표 안에 홑따옴표를 넣기 : 역슬래시(`\`) 사용  

replaceAll을 이용해 홑따옴표 `’` 하나를 역슬래시 홑따옴표  `\’` 로 바꾸기(구문 안에서 `\` 가 되어야 하기 때문에 `\\'`)  

역슬래시는 SQL 안에 역슬래시를 넣기 위한 역슬래시  

```jsx
const name = "테스트";
const loc = "테스트'IT'";

const sql = `INSERT INTO department (dname, loc) VALUES ('${name}', '${loc.replaceAll("'", "\\'")}')`;
```

- 결과

```jsx
INSERT INTO department (dname, loc) VALUES ('테스트', '테스트\'IT\'')
```

- 방지방법2

sql에서 문자열은 홑따옴표로 감싸야 하는데 홑따옴표와 숫자를 안 가리고 `?` 로 만든다  

그리고 `?`에 적용될 데이터를 배열로 만들면 `.query` 함수가 치환시켜준다  

해당 과정에서 SQL 인젝션을 방지할 수 있다.  

```jsx
// 문자열이더라도 홑따옴표 사용 안 함 (sql인젝션 방지)
const sql = "INSERT INTO department (dname, loc) VALUES (?, ?)";

// SQL문의 '?' 를 치환할 배열 --> ? 순서대로 값을 지정한다.
const input_data = ['Node학과', '공학관'];

// query함수가 sql 과 input_data 를 조립해준다. 결과를 (error, result) 로 넘겨줌
dbcon.query(sql, input_data, (error, result) => {});
```

