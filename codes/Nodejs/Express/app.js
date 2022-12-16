/**
 * app.js (step1)
 * 
 * Express 서버 기본 셋팅
 */
/*----------------------------------------------------------
 | 1) 모듈참조
 -----------------------------------------------------------*/
/** 직접 구현한 모듈 */
const logger = require('../helper/LogHelper');
const { myip, urlFotmat } = require('../helper/UtilHelper');
/** 내장 모듈 */
const url = require('url');
const fs = require('fs');
const { join, resolve } = require('path');
/** 설치가 필요한 모듈 */
const dotenv = require('dotenv');
const express = require('express'); // Express 본체


/*----------------------------------------------------------
 | 2) Express 객체 생성
 -----------------------------------------------------------*/
// 여기서 생선한 app 객체의 use() 함수를 사용해서
// 각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.
const app = express();

// 설정 파일 내용 가져오기
// 설정파일의 절대경로 문자열 생성
// resolve() --> 현재 프로그램의 root 경로
const configFileName = process.env.NODE_ENV !== "production" ? ".env.server.development" : ".env.server.production";    
//                             상용버전이 아니라면           ?  configFileName = ".env.server.development" : ".env.server.production"
const configPath = join(resolve(), configFileName); // 환경설정 파일의 경로를 만듦

// 파일이 존재하지 않을 경우 강제로 에러 발생함.  
if (!fs.existsSync(configPath)) {
    try {                               
        // 환경설정 파일이 없으면 프로그램 시작을 못하기 때문에 강제로 try에서 에러 발생
        throw new Error();
    } catch (e) {   // 위에 try가 에러이기 때문에 catch 실행
        console.error("========================================");
        console.error("|       Configuration Init Error       |");
        console.error("========================================");
        console.error("환경설정 파일을 찾을 수 없습니다. 환경설정 파일의 경로를 확인하세요.");
        console.error(`환경설정 파일 경로: ${configPath}`);
        console.error("프로그램을 종료합니다.");
        process.exit(1); // 프로그램 강제 종료
    }
}

// 설정파일 로드
dotenv.config({ path: configPath });    // process.env 에 파일이 저장됨


/*----------------------------------------------------------
 | 3) 클라이언트의 접속시 초기화
 -----------------------------------------------------------*/
// 클라이언트의 접속을 감지
app.use((req, res, next) => {
    logger.debug('클라이언트가 접속했습니다.');

    // 클라이언트가 접속한 시간
    const beginTime = Date.now();

    // 클라이언트가 요청한 페이지 URL
    // 콜백함수에 전달되는 req 파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
    const current_url = urlFotmat({
        protocol: req.protocol, // ex) http://
        host: req.get('host'), // ex) 172.16.141.1
        port: req.port, // ex) 3000
        pathname: req.originalUrl, // ex) /page1.html
    });

    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

    // 클라이언트의 접속이 종료된 경우의 이벤트 --> 모든 응답의 전송이 완료된 경우
    res.on('finish', () => {
        // 접속 종료시간
        const endTime = Date.now();

        // 이번 접속에서 클라이언트가 머문 시간 = 백엔드가 실행하는게 걸린 시간
        const time = endTime - beginTime;
        logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
        logger.debug('--------------------------------------------------------');
    });

    // 이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
    next();
});



/*----------------------------------------------------------
 | 4) Express 객체의 추가 설정
 -----------------------------------------------------------*/




/*----------------------------------------------------------
 | 5) 각 URL별 백엔드 기능 정의
 -----------------------------------------------------------*/




/*----------------------------------------------------------
 | 6) 설정한 내용을 기반으로 서버 구동 시작
 -----------------------------------------------------------*/
const ip = myip();

app.listen(process.env.PORT, () => {
    logger.debug('--------------------------------------------------------');
    logger.debug('|                 Start Express Server                 |');
    logger.debug('--------------------------------------------------------');

    ip.forEach((v, i) => {
        logger.debug(`server address => http://${v}:${process.env.PORT}`);
    });

    logger.debug('--------------------------------------------------------');
});


/** 프로그램(서버) 종료 이벤트 */
process.on('exit', function () {
    logger.debug('백엔드가 종료되었습니다.');
});

/** Ctrl+C를 눌러서 프로그램을 강제종료 시킬때의 이벤트 */
process.on('SIGINT', () => {
    // 정상적으로 프로그램을 종료하도록 한다.
    // --> 위에서 정의한 close 이벤트가 호출된다.
    process.exit();
});