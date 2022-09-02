// 임의의 주민번호를 다음과 같이 *을 포함하여 변수에 저장하시오.
// ssn = '020517-3******'
// 또한 현재 년도를 now_year라는 변수로 저장하시오.
// 이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.

let ssn = '020517-3******';
let now_year = 2022;

/* 
2002 05 17 
1(1900), 3(2000) => 남 
2(1900), 4(2000) => 여
*/
/* 
0.5 0.25  2.5 1.25
1.5 0.75  3.5 1.75
*/

let year_code = ssn.substring(0, 2);
// console.log(year_code);
let month_code = ssn.substring(2, 4);
// console.log(month_code);
let day_code = ssn.substring(4, 6);
// console.log(day_code);
let gender_code = ssn.substring(7, 8);
// console.log(gender_code);

let year = parseInt(year_code - 0.5) / 2 == 0 ? 1900 + parseInt(year_code) : 2000 + parseInt(year_code);
// console.log(year);
let month = parseInt(month_code);
// console.log(month);
let day = parseInt(day_code);
// console.log(day);
let gender = gender_code % 2 == 0 ? "여자" : "남자";
// console.log(gender);
let age = now_year - year + 1;
// console.log(age);

console.log(`${year}년 ${month}월 ${day}일에 태어난 ${age}세 ${gender} 입니다.`);