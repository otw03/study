/* 
다음을 만족하는 클래스 Account를 작성하시오.
1. 다음의 2 개의 필드를 선언
    * 문자열 owner; (이름)
    * 숫자형 balance; (금액)
2. 위 모든 필드에 대한 getter와 setter의 구현
3. 생성자를 통해 파라미터 주입
4. 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
    * deposit(amount)
5. 메소드 withdraw()의 헤드는 다음과 같으며 인자(파라미터)인 금액을 인출(리턴)하는 메소드
    * withdraw(long amount)
    * 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력

클래스 작성 후 아래의 소스를 실행하여 동일한 출력결과를 생성하시오.
const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

출력결과
Hello의 잔액은 15000원
Hello의 잔액은 20000원
Hello의 잔액은 5000원
Hello의 잔액은 10000원
잔액이 부족합니다.
Hello의 잔액은 10000원
*/

function Account(owner, balance) {
    this._owner = owner; // 이름
    this._balance = balance; // 금액
}

Account.prototype = {
    // getter와 setter
    get owner() {
        return this._owner;
    }, 
    set owner(param) {
        this._owner = param;
    }, 
    
    get balance() {
        return this._balance;
    }, 
    set balance(param) {
        this._balance = param;
    }, 

    // 금액을 저축하는 메소드 deposit(amount)
    deposit: function(amount) {
        this.balance += amount;
    },


    // 금액을 인출(리턴)하는 메소드 withdraw(long amount)
    // 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
    withdraw: function(long_amount)  {
        if(this.balance >= long_amount) {
            this.balance -= long_amount
        } else {
            console.log(`잔액이 부족합니다. 인출 상한 금액은 ${this.balance}원 까지 입니다`);
        }
    }
};

const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
