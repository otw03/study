// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.

let count = 0;

for(let i=1; i<=6; i++) {
    for(let j=1; j<=6; j++) {
        if(i + j == 6) {
            console.log(`[ ${i}, ${j} ]`);
            count++;
        }
    }
}
console.log(`경우의 수는 ${count}개 입니다.`);