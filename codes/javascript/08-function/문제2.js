// max는 출력해야 할 최대 라인 수
function  printRevStar(max) {
    for(let i=0; i<max; i++) {
        let star = "";
    
        for(let j=0; j<max-i; j++) {
            star += "*";
        }
        console.log(star);
    }
}

printRevStar(5);