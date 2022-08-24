// 문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오.

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];

let top = 0;

for(let i=0; i<price.length; i++) {
    let money = 0;
    for(let j=i; j<i+1; j++) {
        money += price[i] * qty[j];
        if(top < money) {
            top = money;
        }
    }
}

console.log("가장 높은 상품금액: " + top + "원");