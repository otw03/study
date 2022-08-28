// 문제2번(역순 별찍기)을 재귀함수 기법으로 다시 구현해 보세요.
// max는 최대 행 수, current는 현재 출력중인 행의 위치

function printRevStar(max, current=1) {
    if(max < current){
        return;
    }
    else {
        let star = "";

        for(let i=0; i<=max-current; i++) {     
            star += "*";
        }
        console.log(star);   

        printRevStar(max, current+1);
    }
}

printRevStar(5);
