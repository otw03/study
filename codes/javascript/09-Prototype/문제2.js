/* 
가로(width), 세로(height)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.
이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.
클래스는 JSON 형식으로 작성되어야 합니다.
*/

function Rectangle() {
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    get width() {
        return this._width;
    },
    set width(param) {
        this._width = param;
    },

    get height() {
        return this._height;
    },
    set height(param) {
        this._height = param;
    },

    // 둘레의 길이를 구해 리턴하는 getAround() 메서드
    getAround: function() {
        let around = this.width * 2 + this.height * 2;
        return around;
    },

    // 넓이를 구해 리턴하는 gerArea() 메서드
    gerArea: function() {
        let area = this.width * this.height;
        return area;
    }
};

// get, set 통해서 관리하는 이유는 
// rect._width = 10; rect._height = 5; 처럼 
// 멤버변수에 직접 영향을 주지 않기 위해서 그렇다.
// 예외처리를 하기 위함
/* 
객체지향에서는 객체를 통한 멤버변수의 직접 접근이 멤버변수에 값을 대입하는 과정에서 그 값의 적절성을 판단할 수 없고, 무조건적으로 대입하기 때문에 코드 보안에 부적절하다고 본다.
*/
const rect = new Rectangle();
console.log(rect);
rect.width = 10;
rect.height = 5;
console.log(rect);

console.log(`둘레의 길이는 ${rect.getAround()}이고 넓이는 ${rect.gerArea()}입니다.`);