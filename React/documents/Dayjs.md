# Day.js
[01 .dayjs 객체 초기화](#01-dayjs-객체-초기화)  
[02 .dayjs 객체 Get + Set](#02-dayjs-객체-get--set)  
[03. dayjs 객체 조작하기](#03-dayjs-객체-조작하기)  
[04. dayjs 객체 Format 및 차이 값 구하기](#04-dayjs-객체-format-및-차이-값-구하기)  

**JavaScript 날짜 관련 라이브러리** 중 **가장 가벼운 라이브러리**  

## 01 .****dayjs 객체 초기화****

`dayjs()`에 빈 값을 전달하면 현재 날짜 및 시간 기준으로 dayjs 객체가 생성  

```jsx
dayjs();
```

특정 날짜 및 시간을 기준으로 dayjs 객체를 생성하는 경우 Format String을 전달합니다.  

```jsx
const day1 = dayjs('20221101');
console.log(day1.format('YYYY-MM-DD'));               // 2022-11-01
```

## 02 .****dayjs 객체 Get + Set****

### **년 / 월 / 일 / 요일 / 시 / 분 / 초 / 밀리초**

- day 객체에서 년 / 월 / 일 / 요일 / 시 / 분 / 초 / 밀리초를 가져오기.

`get()` 함수를 사용하거나 Date 객체의 함수와 매핑되는 함수를 사용한다.  

```jsx
// 년 가져오기
dayjs().year());
dayjs().get('year');
dayjs().get('y');

// 월 가져오기
dayjs().month());
dayjs().get('month');
dayjs().get('M');

// 일 가져오기
dayjs().date());
dayjs().get('date');
dayjs().get('D');

// 요일 가져오기
// 일요일(0) ~ 토요일(6)
dayjs().day());
dayjs().get('day');
dayjs().get('d');

// 시간 가져오기
dayjs().hour();
dayjs().get('hour');
dayjs().get('h');

// 분 가져오기
dayjs().minute();
dayjs().get('minute');
dayjs().get('m');

// 초 가져오기
dayjs().second();
dayjs().get('second');
dayjs().get('s');

// 밀리초 가져오기
dayjs().millisecond();
dayjs().get('millisecond');
dayjs().get('ms');
```

- day 객체의 `set()` 함수를 사용하여 년 / 월 / 일 / 요일 / 시 / 분 / 초 / 밀리초를 설정.

`set()` 함수의 첫 번째 인수는 단위를 두 번째 인수는 값을 설정한다.  

```jsx
// 년도 설정
dayjs().set('y', 2021);
dayjs().set('year', 2021);

// 월 설정
dayjs().set('M', 8);
dayjs().set('month', 8);

// 일 설정
dayjs().set('D', 23);
dayjs().set('date', 23);

// 요일 설정
dayjs().set('d', 3);
dayjs().set('day', 3);

// 시간 설정
dayjs().set('h', 10);
dayjs().set('hour', 10);

// 분 설정
dayjs().set('m', 20);
dayjs().set('minute', 20);

// 초 설정
dayjs().set('s', 40);
dayjs().set('second', 40);

// 밀리초 설정
dayjs().set('ms', 100);
dayjs().set('millisecond', 100);
```

## ****03. dayjs 객체 조작하기****

### **날짜 및 시간 더하기, 빼기**

dayjs 객체에 날짜 및 시간을 더하는 경우 `add()` 함수를 사용.  

빼는 경우에는 `subtract()` 함수를 사용.  

`add()` 함수와 `subtract()` 함수의 첫 번째 인수는 단위를 두 번째 인수는 값을 설정한다.  

```jsx
// 년도 더하기, 빼기
dayjs().add(1, 'year');
dayjs().subtract(1, 'year');

// 월 더하기, 빼기
dayjs().add(1, 'month');
dayjs().subtract(1, 'month');

// 일 더하기, 빼기
dayjs().add(1, 'day');
dayjs().subtract(1, 'day');

// 시간 더하기, 빼기
dayjs().add(1, 'hour');
dayjs().subtract(1, 'hour');

// 분 더하기, 빼기
dayjs().add(1, 'minute');
dayjs().subtract(1, 'minute');

// 초 더하기, 빼기
dayjs().add(1, 'second');
dayjs().subtract(1, 'second');
```

## ****04. dayjs 객체 Format 및 차이 값 구하기****

### **Format**

`format()` 함수를 사용하여 dayjs 객체를 지정된 형식으로 날짜 문자열을 반환.  

```jsx
console.log(dayjs().format('YYYY-MM-DD ddd'));        // 2022-11-02 Wed
console.log(dayjs().format('YY-MM-DD'));              // 22-11-02
console.log(dayjs().format('YYYY/MM/DD HH:mm:ss'));   // 2022/11/02 22:21:57
console.log(dayjs().format('hh:mm:ss A'));            // 10:21:57 PM
console.log(dayjs().format('hh:mm:ss a'));            // 10:21:57 pm
console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'));   // 2022-11-02 10:21:57
console.log(dayjs().format('YYYY.MM-DD hh:mm=ss'));   // 2022.11-02 10:21=57
```

### **차이 값**

`diff()` 함수를 사용하여 주어진 날짜 사이의 차이 값을 얻습니다.  
첫 번째 인수를 생략하면 밀리초 단위로 값을 반환하며, 밀리초 단위가 아닌 차이 값을 받기 위해서는 **두 번째 인수에 단위**를 전달합니다.  
소수점 숫자도 원하는 경우 세 번째 인수로 **true**를 전달합니다.  

```jsx
const day1 = dayjs('20221101');
console.log(dayjs('2022-10-30').diff(day1, 'day'));   // -2
```

