/** 재귀함수로 팩토리얼 구하기 */
function f(x) {
    if(x <= 1) {
        console.log(1);
        return 1;
    } else {
        console.log(x + " x " + "f(" + (x-1) + ")");
        return x * f(x-1);
    }
}

const a = f(5);
console.log(a);



// 반복문으로 표현하는 경우(효율은 이게 좋음)
// let k = 1;

// for(let i=5; i>0; i--) {
//    k = k * i;
// }

// console.log(k);