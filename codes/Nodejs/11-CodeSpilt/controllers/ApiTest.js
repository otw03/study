const logger = require("../../helper/LogHelper");
const express = require("express");

// app.js 객체 생성괄호를 없애기 위해서 controllers 즉시 실행 함수로 만듦
module.exports = (() => {
  const router = express.Router();
  /**
   * router.get|post|put|delete('URL', (req, res, next) => { ... });
   */
  router.get("/page1", (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    let html = "<h1>Page1</h1>";
    html += "<h2>Express로 구현한 Node.js 백엔드 페이지</h2>";

    // 메서드 체인 가능
    res.status(200).send(html);
  });

  router.get("/page2", (req, res, next) => {
    // 브라우저에게 전달할 응답 내용
    let html = { a: 100, b: 200 };
    res.status(200).send(html);
  });


  return router;
})();
