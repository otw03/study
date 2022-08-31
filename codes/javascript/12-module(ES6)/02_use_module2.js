// 모듈을 통해서 참조된 객체는 MyModule2의 모든 기능을 내장한 객체가 된다.
import {name, property, say, home} from './MyModule2.js';

console.log(my.name);
console.log(my.property.id);
console.log(my.property.type);
say();

console.log(my.home.postcode);
console.log(my.home.address);
home.getAddress();