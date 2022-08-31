class Student {
    #name;
    #language;
    #english;
    #math;

    constructor(name, language, english, math) {
        this.#name = name;
        this.#language = language;
        this.#english = english;
        this.#math = math;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    
    get language() {
        return this.#language;
    }
    set language(value) {
        this.#language = value;
    }
    
    get english() {
        return this.#english;
    }
    set english(value) {
        this.#english = value;
    }
    
    get math() {
        return this.#math;
    }
    set math(value) {
        this.#math = value;
    }

    sum() {
        let sum = this.language + this.english + this.math;
        return sum;
    } 
    
    avg() {
        let avg = (this.language + this.english + this.math) / 3;
        // let avg = this.sum() / 3;
        return avg;
    }
}

let stud1 = new Student("철수", 92, 81, 77);
let stud2 = new Student("영희", 72, 95, 98);
let stud3 = new Student("민혁", 80, 86, 84);

console.log(`${stud1.name}의 총점은 ${stud1.sum()}점 이고 평균은 ${stud1.avg()}점 입니다.`);
console.log(`${stud2.name}의 총점은 ${stud2.sum()}점 이고 평균은 ${stud2.avg()}점 입니다.`);
console.log(`${stud3.name}의 총점은 ${stud3.sum()}점 이고 평균은 ${stud3.avg()}점 입니다.`);