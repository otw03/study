/**
 * @Filename : UtilHelper.js
 * @Description : 백엔드 개발시 자주 사용되는 독립 함수들 모음
 * @Author : 
 */

const { networkInterfaces } = require('os');
const nodemailer = require('nodemailer');
const logger = require('./LogHelper');

class UtilHelper {
    /** 싱글톤 객체 */
    static #current = null;

    /** 
     * 싱글톤 객체를 생성 후 반환한다.
     * @returns CookieHelper 타입의 객체
     */
    static getInstance() {
        if(UtilHelper.#current === null) {
            UtilHelper.#current = new UtilHelper();
        }

        return UtilHelper.#current;
    }

    myip() {
        const ipAddress = [];
        const nets = networkInterfaces();

        for (const attr in nets) {
            const item = nets[attr];

            item.map((v, i) => {
                // 윈도우 || mac 의 경우
                if((v.family == 'IPv4' || v.family == 4) && v.address != '127.0.0.1') {
                    ipAddress.push(v.address);
                }
            });
        }
        
        return ipAddress;
    };

    urlFotmat(urlObject) {
        return String(Object.assign(new URL("http://a.com"), urlObject));
    }

    async sendMail(writer_name, writer_email, receiver_name, receiver_email, subject, content) { 
        /** 보내는 사람, 받는 사람의 메일주소와 이름 */
        // --> 외부 SMTP연동시 주의사항 - 발신주소가 로그인 계정과 다를 경우 발송이 거부됨.
        if(writer_name) {
            // ex) 오태원 <ypd01476@gamil.com>
            writer_email = `${writer_name} <${writer_email}>`;
        }

        if(receiver_name) {
            receiver_email = `${receiver_name} <${receiver_email}>`;
        }
    
        /** 메일 서버 연동 정보 구성
         *  + 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
        const smtp = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // SMTP 서버명 : smtp.gamil.com
            port: process.env.SMTP_PORT, // SMTP 포트 : 465
            secure: true, // 보안연결(SSL) 필요
            auth: {
                user: process.env.SMTP_USERNAME, // Gmail 로그인에 사용하는 메일 주소
                pass: process.env.SMTP_PASSWORD, // 앱 비밀번호
            },
        });
    
        /** 메일 발송정보 구성 + 메일발송 요청 */   
        try {
            await smtp.sendMail({
                form: writer_email,
                to: receiver_email,
                subject: subject,
                html: content,
            });
        } catch (e) {
            logger.error(e.message);
            throw new Error('메일 발송에 실패했습니다');
        }
    }
}

module.exports = UtilHelper.getInstance();