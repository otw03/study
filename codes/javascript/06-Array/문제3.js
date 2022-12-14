/* 
다음 표는 어떤 학생이 일요일부터 토요일까지의 일주일간 아르바이트를 한 시간이다.
| 일 | 월| 화 | 수 | 목 | 금 | 토 |
|  7 | 5 | 5  | 5  | 5 | 10 | 7  |
주말에는 7시간, 평일에는 5시간, 금요일 10시간 일했다.
시급이 4,500이었지만 목요일부터는 5,200원으로 올랐다고 할 때 일주일간의 총 급여를 구하는 프로그램을 작성
*/

let time = [ 7, 5, 5, 5, 5, 10, 7];
let money = 0;
for(let i=0; i<time.length; i++) {
    if(i >= 4) {
        money += time[i]*5200;
    } else {
        money += time[i]*4500;
    }

    // 풀이2
    // let x = 0;
    // if(i < 4) {
    //     x = 4500;
    // } else {
    //     x = 5200;
    // }
    // money += time[i] * x;

    // 풀이3
    // let x = (i < 4) ? 4500 : 5200;
    // money += time[i] * x;

    // 풀이4
    // money += time[i] * ((i < 4) ? 4500 : 5200);
}

console.log("1주일간의 전체 급여: " + money + "원");