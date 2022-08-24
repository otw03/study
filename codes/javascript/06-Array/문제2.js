/* 
다음 표는 어떤 학생의 과목별 점수이다.
|      | HTML | CSS | Javascript |
| 점수 |  75  |  82  |  91  |
이 학생의 총점과 평균점수를 구하는 프로그램 완성.
*/

var grade = [75, 82, 91];   // 성적표 배열
var sum = 0, avg = 0; // 총점과 평균점수 변수 생성

// 총점 구하기
for(let i=0; i<grade.length; i++) {
    sum += grade[i];
}

// 총점 구하기 for-of 사용
// for(let k of grade) {
//     sum += k;
// }

// 평균 구하기
avg = sum / grade.length;

// arr의 값을 소수점 둘째 자리까지로 제한한다.
avg = avg.toFixed(2);
console.log("총점: " + sum + "점, 평균점수: " + avg + "점");