/** (1) 모듈 및 환경설정 불러오기 */
const { join, resolve } = require("path");
const dotenv = require("dotenv");
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
        let sql = "SELECT name, position, sal, date_format(hiredate, '%Y-%m-%d') AS hiredate FROM professor";
        // SQL문의 '?' 를 치환할 배열 --> ? 순서대로 값을 지정한다.
        const [result1] = await dbcon.query(sql);
        // console.log(result1);

        result1.map((v, i) => {
            console.log("%s%s\t 급여: %d만원\t 입사일: %s", v.name, v.position, v.sal, v.hiredate);
        });

        // 실제 restful api를 구현할 경우에는 json을 응답결과로 전달하면 되므로
        // sql 조회 결과에 대해서 별도의 반복문을 처리하지는 않고 리턴받은 result1을 통째로 응답결과로 사용하면 된다.
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