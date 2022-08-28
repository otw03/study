/* 
369게임은 숫자를 순서대로 말하면서 3,6,9가 포함된 횟수만큼 박수를 치는 게임이다.
1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 "짝"을 출력하고 그렇지 않은 경우에는 숫자를 출력하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 myGame(n)을 작성하시오.
*/

// 369게임의 특성은 3의 배수가 아니다
// 3 6 9가 포함된 것이다
// 정수 + 문자 = 문자
// 1 + "" = 문자열"1"

function myGame(n){
    let totalCount = 0;

    for(let i=1; i<=n; i++) {
        let str = ""+i;
        let count = 0;
        let clap = "";

        for(let j=0; j<str.length; j++) {
            if(str[j] == 3 || str[j] == 6 || str[j] == 9) {
                count++;
                totalCount++;
                clap += "짝";
            }
        }

        if(count) {
            console.log(`${clap}(${i}) --> ${count}번`);
        } else {
            console.log(i);
        }
    }
        
    console.log(`\n박수를 총 ${totalCount}번 쳤습니다.`);
}

myGame(35);