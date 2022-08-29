/* 
국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.
이 때 Stuent 클래스는 합계를 리턴하는 메서드인 sum()과 평균을 리턴하는 avg()를 제공합니다.
작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.
클래스는 JSON 형식으로 작성되어야 합니다.

이름 국어 영어 수학
철수 92  81  77
영희 72  95  98
민혁 80  86  84
*/

function Student(name, language, english, math) {
    this._name = name;
    this._language = language;
    this._english = english;
    this._math = math;
}

Student.prototype = {
    get name() {
        return this._name;
    }, 
    set name(param) {
        this._name = param;
    }, 

    get language() {
        return this._language;
    }, 
    set language(param) {
        this._language = param;
    }, 
    
    get english() {
        return this._english;
    }, 
    set english(param) {
        this._english = param;
    }, 
    
    get math() {
        return this._math;
    }, 
    set math(param) {
        this.math = param;
    }, 
    
    sum: function() {
        let sum = this.language + this.english + this.math;
        return sum;
    }, 
    
    avg: function() {
        let avg = (this.language + this.english + this.math) / 3;
        // let avg = this.sum() / 3;
        return avg;
    }
};


let stud1 = new Student("철수", 92, 81, 77);
let stud2 = new Student("영희", 72, 95, 98);
let stud3 = new Student("민혁", 80, 86, 84);

console.log(`${stud1.name}의 총점은 ${stud1.sum()}점 이고 평균은 ${stud1.avg()}점 입니다.`);
console.log(`${stud2.name}의 총점은 ${stud2.sum()}점 이고 평균은 ${stud2.avg()}점 입니다.`);
console.log(`${stud3.name}의 총점은 ${stud3.sum()}점 이고 평균은 ${stud3.avg()}점 입니다.`);


// 풀이2
console.group("반복문 안에서 객체 활용");
const grade = [
    [ "철수", 92, 81, 77],
    [ "영희", 72, 95, 98],
    [ "민혁", 80, 86, 84]
   ];

for(const item of grade) {
    const s = new Student(item[0], item[1], item[2], item[3]);
    console.log(`${item[0]}의 총점은 ${s.sum()}점 이고 평균은 ${s.avg()}점 입니다.`);
}
console.groupEnd();