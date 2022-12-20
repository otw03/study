/**
 * app.js (최종)
 * 
 * yarn add axios body-parser cookie-parser cors dayjs dotenv express express-session express-useragent method-override multer node-schedule node-thumbnail nodemailer serve-favicon serve-static winston winston-daily-rotate-file
 */
/*----------------------------------------------------------
 | 1) 모듈참조
 -----------------------------------------------------------*/
/** 직접 구현한 모듈 */
const logger = require('../helper/LogHelper');
const { myip, urlFotmat } = require('../helper/UtilHelper');
const WebHelper = require('../helper/WebHelper');

/** 내장 모듈 */
const fs = require('fs');
const { join, resolve } = require('path');

/** 설치가 필요한 모듈 */
const dotenv = require('dotenv');
const express = require('express'); // Express 본체
const useragent = require('express-useragent'); // 클라이언트의 정보를 조회할 수 있는 기능
const serveStatic = require('serve-static'); // 특정 폴더의 파일을 URL로 노출시킴
const serveFavicon = require('serve-favicon'); // favicon 처리
const bodyParser = require('body-parser'); // POST 파라미터 처리
const methodOverride = require('method-override'); // PUT, DELETE 파라미터 처리
const cookieParser = require('cookie-parser'); // Cookie 처리
const expressSession = require('express-session'); // Session 처리
const cors = require('cors'); // --> cors 접근 허용   yarn add cors

/** 예외처리 관련 클래스 */
const { PageNotFoundException } = require('../helper/ExceptionHelper');

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
/** app 객체에 UserAgent 모듈을 탑재 */
// --> Express객체(app)에 추가되는 확장 기능들을 Express 에서는 미들웨어라고 부른다
// --> UserAgent 모듈은 초기화 콜백함수에 전달되는 req, res객체를 확장하기 때문에 다른 모듈들보다 먼저 설정되어야 한다.
app.use(useragent.express());

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

    // 클라이언트의 IP주소(출처: 스택오버플로우)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    // 클라이언트의 디바이스 정보 기록 (UserAgent 사용)
    logger.debug(`[client] ${ip} / ${req.useragent.os}  / ${req.useragent.browser} (${req.useragent.version}) / ${req.useragent.platform}`);

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
/** POST 파라미터 수신 모듈 설정. 추가되는 미들웨어들 중 가장 먼저 설정해야 함 */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: true --> 지속적 사용.
// extended: false --> 한번만 사용.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text()); // TEXT형식의 파라미터 수신 가능
app.use(bodyParser.json()); // JSON형식의 파라미터 수신 가능

/** HTTP PUT, DELETE 전송방식 확장 */
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(methodOverride('X-HTTP-Method')); // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override')); // IBM

/** 쿠키를 처리할 수 있는 객체 연결 */
// Cookie-parsesr는 데이터를 저장, 조회 할 때 암호화 처리를 동반한다.
// 이 때, 암호화에 사용되는 key문자열을 개발자가 정해야 한다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

/** 세션 설정 */
app.use(expressSession({
    // 암호화 키
    secret: process.env.SESSION_ENCRYPT_KEY,
    // 세션이 초기화 되지 않더라도 새로 저장할지 여부 (일반적으로 false)
    resolve: false,
    // 세셔니 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
    saveUnintialized: false
}));

/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

// 업로드 된 파일이 저장될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));

// 썸네일 이미지가 저장될 폴더를 URL에 노출함
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** CORS 접근 허용 */
app.use(cors());

/** WebHelper 설정 */
app.use(WebHelper());

/** 라우터(URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();
// 라우터를 express에 등록
app.use('/', router);


/*----------------------------------------------------------
 | 5) 각 URL별 백엔드 기능 정의
 -----------------------------------------------------------*/

/** 분리된 컨트롤러들을 Express 객체에 등록 */
// 괄호를 없애기 위해서 controllers 즉시 실행 함수로 만듦
// app.use(require('./controllers/ApiTest')());
// app.use(require('./controllers/SendMail')());
app.use(require('./controllers/ApiTest'));
app.use(require('./controllers/SendMail'));

/** (반드시 모든 route처리의 맨 마지막에 위치해야 함) */
// 컨트롤러에서 에러 발생시 `next(에러객체)`를 호출했을 때 동작할 처리
app.use((err, req, res, next) => res.sendError(err));

// 앞에서 정의하지 않은 기타 URL에 대한 일괄 처리 (무조건 맨 마지막에 정의해야 함)
app.use("*", (req, res, next) => res.sendError(new PageNotFoundException()));


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