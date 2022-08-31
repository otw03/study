/* 
가로(width), 세로(height)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.
이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.
클래스는 JSON 형식으로 작성되어야 합니다.
*/

class Rectangle {
    #width;
    #height;

    constructor() {
        this.#width = null;
        this.#height = null;
    }

    get width() {
        return this.#width;
    }
    set width(param) {
        this.#width = param;
    }

    get height() {
        return this.#height;
    }
    set height(param) {
        this.#height = param;
    }

    // 둘레의 길이를 구해 리턴하는 getAround() 메서드
    getAround() {
        return this.width * 2 + this.height * 2;
    }

    // 넓이를 구해 리턴하는 gerArea() 메서드
    gerArea() {
        return this.width * this.height;
    }

}

rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(`둘레의 길이는 ${rect.getAround()}이고 넓이는 ${rect.gerArea()}입니다.`);