console.group("First");

// 개발 단계에서 부수적인 데이터를 출력하고자 할 때 사용한다.
// -->  제품을 배포할 때는 로그는 웬만하면 삭제해서 배포하는 게 좋다.
//      무언가 출력한다는 것은 성능에 영향을 줄 수 있다.
//      정말 필요한 로그가 아니면 다 지우고 배포하는 게 중요하다.
console.log("Hollo World");

// 개발자가 변수의 값을 확인하기 위한 용도로 사용하는 출력
// --> 통상적으로 console.log와 크게 구분하지 않는다.
console.debug("Hollo World");

console.info("Hollo World");

console.warn("Hollo World");

console.error("Hollo World");

console.groupEnd();