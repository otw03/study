/* 
위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.
*/

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

let sum = 0;
let count = 0;

for(let key in exam) {
    sum += exam[key][2];

    count++;
}

let avg = sum / count;

console.log(`모든 학생의 수학 총점은 ${sum}점 이고, 평균은 ${avg}점 입니다.`);



// 풀이2
// // 전체 학생에 대한 총점이므로 반복문의 바깥에서 변수 초기화
// let sum = 0;

// // JSON은 길이를 알 수 없기 때문에 JSON의 원소 하나를 반복문으로 스캔할 때마다
// // count변수를 1씩 증가하여 전체 학생 수를 알아내야 한다.
// let student_count = 0;

// for (const key in exam) {
//     sum += exam[key][2];
    
//     // 몇 번째 학생인지 카운트
//     student_count++;
// }

// // 학생별 수학 총점 / 학생수
// let avg = sum / student_count;

// console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg);



// 각 과목당으로 했을 때 어떻게 해야하는지 생각해보기
