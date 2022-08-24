// 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.

var check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for(let i=0; i<check_list.length; i++) {
    // 풀이1
    if(check_list[i] == true) {
        check_list[i] = false;
    } else {
        check_list[i] = true;
    }

    // 풀이2
    // check_list[i] = !check_list[i];
}

console.log("after --> " + check_list);