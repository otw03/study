/* 
다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
위 데이터에서 학생별 총점과 평균을 구하시오.
*/

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

for(let key in exam) {
    let sum = 0;
    // console.log(key);
    // console.log(exam[key]);
    for(let v of exam[key]) {
        sum += v;
    }
    let avg = sum / exam[key].length;
    console.log(`${key}의 총점은 ${sum}점 이고, 평균은${avg}점 입니다.`);
}


// 풀이2
// JSON의 key에 대한 반복 처리
// for (const key in exam) {
//     // 학생별 총점을 위한 변수 초기화
//     let sum = 0;

//     // exam[key]는 학생 한명의 점수 배열.
//     // 이 배열의 원소를 스캔하는 반복문을 사용하여 총점 구하기
//     for (const p of exam[key]) {
//         sum += p;
//     }
//     // 총점을 학생 개개인의 과목수로 나누어 평균 구하기
//     let avg = sum / exam[key].length;

//     console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", key, sum, avg);
// }
   