// number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오. 이 변수에는 1이나 2밖에 저장될 수 없습니다.

// 구구단 프로그램을 만들고자 한다.

// 전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9), number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.

/* 풀이1 */
let number = 1;

for(let i=2; i<10; i++) {
    
    if(number == 1 && i%2 != 0) {           // 홀수 단 출력 i%2 != 0
        for(let j=1; j<10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    } else if(number == 2 && i%2 == 0) {    // 짝수 단 출력 i%2 == 0
        for(let j=1; j<10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}

/* 풀이2 */
// const number = 2;   // 2, 4, 6, 8
/* const number = 1;   // 3, 5, 7, 9

for(let i=4-number; i<10; i+=2) {
    for(let j=1; j<10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
} */
