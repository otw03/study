/** (1) 모듈 및 환경설정 불러오기 */
const { join, resolve } = require("path");
const dotenv = require("dotenv");
// yarn add mysql2
const mysql = require("mysql2/promise");

// 설정 파일 내용 가져오기
dotenv.config({path: join(resolve(), ".env.server.development")});

// 접속 정보 설정
const connectionInfo = {
    host: process.env.DATABASE_HOST, // MYSQL 서버 주소 (다른 PC인 경우 IP주소),
    port: process.env.DATABASE_PORT, // MYSQL 포트번호,
    user: process.env.DATABASE_USERNAME, // MYSQL의 로그인 할 수 있는 계정이름,
    password: process.env.DATABASE_PASSWORD, // 비밀번호,
    database: process.env.DATABASE_SCHEMA, // 사용하고자 하는 데이터베이스 이름
};
   
console.info(connectionInfo);

(async () => {
    let dbcon = null;

    try {
        /** (2) mysql 접속 객체 생성 */
        dbcon = await mysql.createConnection(connectionInfo);
        // SQL 접속
        await dbcon.connect();
    } catch (err) {
        console.error(`[데이터베이스 접속에 실패했습니다.]`);
        console.error(err);
        return;
    }

    try {
        /** (3) SQL 실행하기 */
        // ... 접속 성공시 SQL 처리
        // 실행할 SQL구문
        // Node의 변수로 치환될 부분(주로 저장, 수정될 값)은 ?로 지정
        // 문자열이더라도 홑따옴표 사용 안 함 (sql인젝션 방지)
        let sql = "INSERT INTO department (dname, loc) VALUES (?, ?)";
        // SQL문의 '?' 를 치환할 배열 --> ? 순서대로 값을 지정한다.
        let input_data = ['Node학과', '공학관'];

        // insert의 결과는 반환되는 객체는 원소가 1개인 배열이다.
        const result1 = await dbcon.query(sql, input_data); 
        console.log(result1[0].affectedRows);
        console.log(result1[0].insertId);
        const firstId = result1[0].insertId;

        // 그러므로 아래와 같이 비구조 문법 적용이 가능하다.
        input_data = ["SQL학과", "공학관"];
        const [result2] = await dbcon.query(sql, input_data); 
        console.group("INSERT 처리 결과");
        console.log("저장괸 데이터의 수: " + result2.affectedRows);
        console.log("생성된 PK값: " + result2.insertId);
        console.groupEnd();
        
        // 한번 더 비구조 문법을 적용할 수도 있다.
        input_data = ["백엔드학과", "공학관"];
        const [{ affectedRows, insertId }] = await dbcon.query(sql, input_data); 
        console.group("INSERT 처리 결과");
        console.log("저장괸 데이터의 수: " + affectedRows);
        console.log("생성된 PK값: " + insertId);
        console.groupEnd();

        // UPDATE절 수행 --> WHERE절의 지정이 중요하다.
        const [result3] = await dbcon.query("UPDATE department SET dname=? WHERE deptno >= ?", ["수정학과", firstId]); 
        console.group("UPDATE 처리 결과");
        console.log("수정된 데이터의 수: " + result3.affectedRows);
        console.groupEnd();
    } catch (err) {
        console.error(err);
        return;
    } finally {
        console.log("~~~~~~~~~~ db 접속 해제 ~~~~~~~~~~");
        if(dbcon) {
            dbcon.end();
        }
    }
})();