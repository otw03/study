function getTimes(x, y) {
    const z = x * y;
    return z;
}

const a = getTimes(123, 45);
console.log(a);

const b = getTimes(123, 45) + 10000;
console.log(b);

console.log(getTimes(100, 20));



// 리턴 예시2
function sum(k) {
    let x = 0;

    for(let i in k) {
        console.log(i);
        console.log(k[i]);
        x += k[i];
    }

    return x;
}

console.log(sum({국어:80, 영어:70, 수학:60}));
