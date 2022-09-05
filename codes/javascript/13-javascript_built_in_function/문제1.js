// 자신의 이메일 주소를 email 이라는 변수에 저장하고 @를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오.

let email = "ypd01476@gmail.com";

email.split("@").forEach((v) => {
    console.log(v);
});


// 풀이2
// let p = email.indexOf("@");
// let id = email.substring(0, p);
// let domain = email.substring(p + 1);

// console.log(id);
// console.log(domain);
