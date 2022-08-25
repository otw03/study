/* 
아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
]
1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.
*/
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
]

let sum = 0;

for(let i=0; i<covid19.length; i++) {
    sum += covid19[i].active;
}

// 풀이2
// for(let k of covid19) {
//     sum += k.active;
// }


let avg = sum / covid19.length;

console.log(`누적 확진자 수: ${sum}`);
console.log(`일 평균 확진자 수: ${avg}`);

