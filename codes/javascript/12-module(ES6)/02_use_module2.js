// ES6 import 규칙
// 순서는 상관 없다
// 필요없는 기능은 생략 가능
// 이름은 반드시 동일
import {name, property, say, home} from './MyModule2.js';

console.log(my.name);
console.log(my.property.id);
console.log(my.property.type);
say();

console.log(my.home.postcode);
console.log(my.home.address);
home.getAddress();