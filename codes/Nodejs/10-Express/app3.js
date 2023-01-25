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

const useragent = require('express-useragent'); // 클라이언트의 정보를 조회할 수 있는 기능
const serveStatic = require('serve-static'); // 특정 폴더의 파일을 URL로 노출시킴
const serveFavicon = require('serve-favicon'); // favicon 처리

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
/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();
// 라우터를 express에 등록
app.use('/', router);


/*----------------------------------------------------------
 | 5) 각 URL별 백엔드 기능 정의
 -----------------------------------------------------------*/
/** step2 에서 추가되는 부분 */
// router.route(path).get|post|put|delete((req, res, next) => {})
router.get('/page1', (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    let html = '<h1>Page1</h1>';
    html += '<h2>Express로 구현한 Node.js 백엔드 페이지</h2>';

    /** 응답보내기(1) - Node 순정 방법*/
    // res.writeHead(200);
    // res.write(html);
    // res.end();

    /** 응답보내기(2) - Express의 간결화된 방법*/
    // res.status(200);
    // res.send(html);

    // 메서드 체인 가능
    res.status(200).send(html);
});

router.get('page2', (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    //let html = '<h1>Page2</h1>';
    //html += '<h2>Node.js 백엔드 페이지</h2>';
    let html = {a: 100, b: 200};
    res.status(200).send(html);
});

router.get('page3', (req, res, next) => {
    // 페이지 강제 이동
    res.redirect('https://www.naver.com');
});

/** step3 에서 추가되는 내용 */
// 아래의 html파일들을 통해 테스트 해야 함
// --> public/get_params_by_link.html
// --> public/get_params_by_form.html
// --> public/get_params_by_js.html
// --> public/get_params_by_ajax.html
router.get('/send_get', (req, res, next) => {
    // ex) ?answer=400&age=10&height=175&weight=80
    // GET 파라미터들은 req.query 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]');
    for(let key in req.query) {
        const str = '\t >> ' + key + '=' + req.query[key];
        logger.debug(str);
    }

    // /send_get?answer=0000 형태로 접근한 경우 answer 파라미터 값 추출
    //const answer = req.query['answer'];
    const answer = req.query.answer;
    let html = null;

    if(parseInt(answer) == 300) {
        html = "<h1 style='color:#0066ff'>정답입니다.</h1>";
    } else {
        html = "<h1 style='color:#ff6600'>틀렸습니다.</h1>";
    }

    res.status(200).send(html);
});

// PATH 파라미터들은 브라우저를 통해 직접 접속하여 테스트
// ex) http://172.16.46.1:3001/send_url/이젠아카데미/노드js
router.get('/send_url/:username/:age', (req, res, next) => {
    // PATH 파라미터는 req.params 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]');
    for(let key in req.params) {
        const str = '\t >> ' + key + '=' + req.params[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.params.username + "</span>님은 <span style='color:#ff6600'>" + req.params.age + "</span>세 입니다.</h1>";

    res.status(200).send(html);
});



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