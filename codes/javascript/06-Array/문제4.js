/* 
쇼핑몰의 장바구니에 담은 상품에 대한 내역이 주어짐
상품의 가격을 원소로 갖는 1차 배열 price
각 상품의 수량을 원소로 갖는 1차 배열 qty
총 얼마를 결제해야 하는지 총 결제금액을 구하는 프로그램을 작성
*/

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let money = 0;

// 풀이1
// for(let i=0; i<price.length; i++) {
//     for(let j=i; j<i+1; j++) {
//         money += price[i] * qty[j];
//     }
// }

// 풀이2 인덱스 위치가 같아서 for 두번 쓸 필요 없음
for(let i=0; i<price.length; i++) {
    money += price[i] * qty[i];
}

console.log("전체 결제 금액: " + money + "원");