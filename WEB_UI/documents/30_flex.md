# flex

# CSS Flex : 부모요소에 display: flex; 속성 적용, 자식요소의 위치(배치)를 지정

## flex-direction : 자식 요소의 축과 방향을 설정

#### flex-direction: row; 가로 방향, 왼쪽>오른쪽으로 정렬(기본값)

#### flex-direction: row-reverse; 가로 방향, 오른쪽>왼쪽으로 정렬

#### flex-direction: column; 세로 방향, 위>아래로 정렬

#### flex-direction: column-reverse; 세로 방향, 아래>위로 정렬

---

## flex-wrap : 자식요소의 줄바꿈 여부 설정

#### flex-wrap: nowrap; 줄바꿈 없이 한 줄에 표시.(기본값) 넘치면 부모의 width 무시

#### flex-wrap: wrap; 줄바꿈해서 표시. 부모요소에 높이가 지정되어 있는 경우 기본적으로 높잇값을 꽉채우고, 줄바꿈시 균등하게 나눠들어간다.

#### flex-wrap: wrap-reverse; 줄바꿈해서 표시. 부모요소에 높이가 지정되어 있는 경우 기본적으로 높잇값을 꽉채우고, 줄바꿈시 균등하게 나눠들어간다. 행 순서 반대로

---

## flex-flow: flex-direction flex-wrap; 두 개 속성 띄어쓰기로 구분, 함께 작성

#### flex-flow: row wrap; 가로방향 왼>오, 넘치면 줄바꿈

#### flex-flow: colum nowrap; 세로방향 위>아래, 줄바꿈X

---

## justify-content: 플렉스 요소 간 정렬 방법

#### justify-content: flex-start; 주축 시작점(기본값)

#### justify-content: flex-end; 주축 끝점

#### justify-content: center; 중앙 정렬

#### justify-content: space-between; 양쪽 정렬

#### justify-content: space-around; 균등 정렬(양끝에도 공간 있음)

---

## align-items: 교차축 기준 배치 방법(요소끼리의 배치)

#### align-items: flex-start; 교차축 시작점 기준

#### align-items: flex-start; 교차축 끝점 기준

#### align-items: center; 교차축 가운데 기준

#### align-items: baseline; 문자 기준선(g 같은 경우 꼬리가 아래로 내려가 있음)

#### align-items: stretch; 늘려서 채움

#### + align-self 속성

---

## align-content : 여러줄일 때 교차축 기준 정렬

#### align-content : flex-start; 교차축의 시작점에 맞춰 배치

#### align-content : flex-end; 교차축의 끝점에 맞춰 배치

#### align-content : center; 교차축의 가운데에 맞춰 배치

#### align-content : space-between; 교차축 기준 양쪽 정렬

#### align-content : space-around; 교차축 기준 균등 간격

#### align-content : stretch; 교차축 기준 늘려 채움