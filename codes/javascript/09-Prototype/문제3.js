/* 
다음을 만족하는 Student 클래스를 작성하시오.
1. String형의 학과와 정수형의 학번을 프로퍼티로 선언후 생성자를 통해 주입
2. getter, setter를 정의
3. sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

클래스 작성 후 아래의 소스를 실행하여 동일한 출력결과를 생성하시오.
const stud = new Student("컴퓨터", 202004123);
stud.sayHello();

출력결과
나는 컴퓨터학과 202004123학번 입니다.
*/

// String형의 학과와 정수형의 학번을 프로퍼티로 선언후 생성자를 통해 주입
function Student(department, studid) {
    this._department = department;
    this._studid = studid;
}

Student.prototype = {
    // getter, setter를 정의
    get department() {
        return this._department;
    }, 
    set department(param) {
        this._department = param;
    }, 
    
    get studid() {
        return this._studid;
    }, 
    set studid(param) {
        this._studid = param;
    }, 
    
    // "나는 OOOO학과 OO학번 입니다." 를 출력하는 sayHello() 메서드
    sayHello: function() {
        console.log(`나는 ${this.department}학과 ${this.studid}학번 입니다.`);
    }
};

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();