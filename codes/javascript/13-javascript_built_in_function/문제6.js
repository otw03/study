/* 
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

* 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
* completion의 길이는 participant의 길이보다 1 작습니다.
* 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
* 참가자 중에는 동명이인이 있을 수 없습니다.
*/

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];

let completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
    var answer = '';

    // for(let i=0; i<participant.length; i++) {
    //     let p = participant[i];
    
    //     if(!completion.includes(p)) {
    //         answer = p;
    //         break;
    //     }
    // }

    // 풀이2
    // participant.some((v, i) => {
    //     if(!completion.includes(v)) {
    //         answer = v;
    //         return true;
    //     }
    // });

    // return answer;

    participant.find((v, i) => {
        if(!completion.includes(v)) {
            return true;
        }
    });
}




// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"],
 ["eden", "kiki"]));
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],
 ["josipa", "filipa", "marina", "nikola"]));
// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"],
 ["stanko", "ana", "mislav"]));