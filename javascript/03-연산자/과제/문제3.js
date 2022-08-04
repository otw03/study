"use strict";

let numOfApples = 123;

let result = numOfApples%10 != 0 ? (numOfApples - numOfApples%10)/10 + 1 : numOfApples/10;

console.log(result);

