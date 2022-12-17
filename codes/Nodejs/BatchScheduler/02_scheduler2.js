/**
 * 스케쥴에 따른 자동 수행
 */
/** 1) 필요한 패키지 참조하기 */
const logger = require('../helper/LogHelper');
const schedule = require('node-schedule');

/** 2) 매 분 10초마다 수행 */
const rule1 = new schedule.RecurrenceRule();
rule1.second = 10;
schedule.scheduleJob(rule1, () => logger.debug(`[rule1] 매분 ${rule1.second}초마다 수행!!`));

/** 3) 매 시간 분,초마다 수행 */
const rule2 = new schedule.RecurrenceRule();
rule2.minute = 22;
rule2.second = 20;
schedule.scheduleJob(rule2, () => logger.debug(`[rule2] 매시간 ${rule2.minute}분 ${rule2.second}초마다 수행!!`));

/** 4) 매일 시,분,초마다 수행 */
const rule3 = new schedule.RecurrenceRule();
rule2.hour = 17;
rule3.minute = 22;
rule3.second = 37;
schedule.scheduleJob(rule3, () => logger.debug(`[rule3] 매일 ${rule3.hour}시 ${rule3.minute}분 ${rule3.second}초마다 수행!!`));


logger.info("예약작업이 설정되었습니다.");