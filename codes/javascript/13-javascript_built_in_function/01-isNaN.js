/**
 * isNaN(value)
 * 파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다.
 * -> 숫자가 아니면 true, 숫자가 맞다면 false
 * -> 숫자로 변환 가능한 형식일 경우 false
 * 
 * Javascript의 다른 모든 값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할 수 없다.
 * 그래서 NaN 여부를 판별하는 함수가 필요하다.
 */

// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNan(NaN)); // 참
console.log(isNan(undefined)); // 참
console.log({a:10, b:20}); // 참
console.log(isNan([10,20,30])); // 참
console.log(isNan('blabla')); // 참
console.log(isNan('123ABC')); // 참

// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNan(true)); // 거짓 --> 1 
console.log(null); // 거짓 --> 0
console.log(isNan(37)); // 거짓 
console.log(isNan('37')); // 거짓: "37"은 숫자 37로 변환
console.log(isNan('37.37')); // 거짓 --> "37.37"은 숫자 37.37로 변환
console.log(isNan('')); // 거짓: 빈 문자열을 0으로 변환
console.log(isNan(' ')); // 거짓: 공백만으로 구성된 문자열을 0으로 변환
// 빈 문자열 '' or 공백 ' ' => false => 0 => 숫자