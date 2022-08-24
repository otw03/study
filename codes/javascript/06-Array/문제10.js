/* 
문제9에서 반 평균을 출력하시오. 반 평균은 학생의 평균점수 총 합/학생수로 구합니다.
[주의] toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다. 이를 감안하여 반 점수를 구하세요.
*/

/** 학생이름 배열 */
let student = ["둘리", "도우너", "또치", "희동",];

/** 성적표 배열 */
let grade = [
    [ 78, 89, 96 ],
    [ 62, 77, 67 ],
    [ 54, 90, 80 ],
    [ 100, 99, 98 ]
];

let avg = 0; // 반 평균점수
let personal_avg_sum = 0; // 평균점수 총 합

/** 총점과 평균 구하기 */
for(let i=0; i<student.length; i++) {
    let personal_sum = 0 // 학생의 총점
    let personal_avg = 0; // 학생의 평균점수

    for(let j=0; j<grade[i].length; j++) {
        personal_sum += grade[i][j];
    }

    personal_avg = (personal_sum / grade[i].length);
    
    console.log(`${student[i]}의 총점: ${personal_sum}, 평균점수: ${personal_avg.toFixed(2)}`);
    
    personal_avg_sum += personal_avg;
}

avg = personal_avg_sum / student.length;

console.log(`반 평균점수: ${avg}`);