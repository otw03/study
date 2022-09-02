// 아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.
// str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."

let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";

// "수업시간" 을 "a" 로 교체
let change_str = str.replaceAll("수업시간", "a"); 
// => a에 배운것은 a에 다 이해하고 넘어가야지 a에 놓치면 따라오기 힘들다.
let count = 0;

// for of 사용
for(let v of change_str) {
    if(v == "a") {
        count++;
    }
}

// forEach 사용
// change_str.split("").forEach((v) => {
//     if(v == "a") {
//         count++;
//     }
// });

console.log(count);



// 풀이2
// let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";

// let word = "수업시간";
// let flen = word.length;
// let find = true;
// count = 0;

// while(find) {
//     console.log(str);
//     let p = str.indexOf(word);
//     find = p > -1;

//     if(find) {
//         count++;
//         str = str.substring(p + flen);
//     }
// }

// console.log(count);