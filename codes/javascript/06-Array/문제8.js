// 배열의 원소를 반대로 배치

let arr = [5, 3, 2, 8, 9];
console.log("before --> " + arr);

for(let i=0; i<parseInt(arr.length / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
}

console.log("after --> " + arr);

// 풀이2
// let p = arr.length % 2 == 0 ? arr.length / 2 : (arr.length-1) / 2;

// for(let i=0; i<p; i++) {
//     let k = arr.length - i - 1;

//     let tmp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = tmp;
// }

// console.log("after --> " + arr);