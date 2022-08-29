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




// 풀이2
// function myGame(n) {

//     // 박수를 총 몇번 쳤는지에 대한 합계값
//     let count = 0;

//     for(let i=1; i<=n; i++) {
        
//         // 현재 숫자(i)를 문자열로 변환함. 33 --> "33"
//         // --> 문자열은 그 자체가 배열이므로 각 자리의 숫자를 의미하는 글자를 원소로 갖는 배열이 된다고 볼 수 있다.
//         const str = i + "";
//         // console.group(i);

//         // 출력할 문자열(숫자인지 박수소리인지...)
//         let say = "";
//         // 이번 턴에 박수를 몇번 치는지 카운트하는 변수
//         let clap = 0;

//         // 숫자를 문자열로 변환하여 각 글자수만큼 반복
//         for(let j of str) {
//             // console.log(j);

//             // 각 글자가 3,6,9 중의 하나라면?
//             if(j == "3" || j == "6" || j == "9") {
//                 say += "짝";
//                 clap++;
//             }
//         }
//         // console.groupEnd();

//         if(clap == 0) {
//             console.log(i);
//         } else {
//             console.log("%s (%d) --> %d번", say, i, clap);
//             count += clap;
//         }
//     }

//     console.log("\n박수를 총 %d번 쳤습니다.", count);
// }


// myGame(35);





