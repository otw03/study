/** 메인페이지 날씨상태, 현재기온, 지역명, 최저기온, 최고기온 강수확률 출력 함수 mainPage() */
function mainPage(area, json, key, json2) {
    
    /** 현재 기온 넣기 */
    let area1 = document.querySelector(`.${area}`);

    // 기온
    let now = area1.querySelector('.now');
    now.innerHTML = (json.main.temp.toFixed(0)) + '℃';


    /** 현재 하늘상태 넣기 */
    // 날씨 아이콘 아이디
    let icon = json.weather[0].icon;

    // 날씨 아이콘 URL
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    // 기상 조건
    let description = json.weather[0].description;

    // 하늘상태
    let sky = area1.querySelector('.sky');
    // 이미지 생성
    const img = document.createElement('img')
    img.setAttribute("src", iconUrl);
    img.setAttribute("alt", description);
    sky.appendChild(img);

    
    /** 지역명 만들기 */
    let p = document.createElement('p');
    p.innerHTML = key;
    area1.appendChild(p);


    let list = json2.list;


    /** 오늘 날짜 리턴받기 */
    // API에서 받아오늘 날짜는 UTC 시간임을 고려해줘야 한다
    const date = new Date();
    let date1 = new Date(date.getTime() + (date.getTimezoneOffset() * 60000)); // GMT 시간을 UTC 시간대로 변환
    const yy = date1.getFullYear();
    const mm = date1.getMonth() + 1;
    const dd = date1.getDate();

    let result = yy + '-' + mm + '-' + dd;  // 오늘날짜 result ex)2022-10-12


    /** 오늘 시간대별 최저기온 탐색해서 반환하기 */
    const minArr = list.map((v, i) => {
        let day = (v.dt_txt).substring(0,10);   // v.dt_txt는 오늘날짜 데이터 ex)2022-10-12 21:00:00 
        // console.log(day);
        if(day == result) {
            return v.main.temp_min;
        }                
    });

    // 최저기온 정렬
    minArr.sort((a, b) => a - b);
    let temp_min = minArr[0];   // 예보 최저기온 temp_min

    // 최종 최저기온 (오차 줄이기 위해 실시간 최저기온과 3시간단위 예보 오늘 최저기온 비교해서 반환)
    let min = 0;

    if(temp_min > json.main.temp_min) {
        min = json.main.temp_min;
    } else if(temp_min < json.main.temp_min) {
        min = temp_min;
    } else {
        min = temp_min;
    }



    /** 오늘 시간대별 최저기온 탐색해서 반환하기 */
    const maxArr = list.map((v, i) => {
        let day = (v.dt_txt).substring(0,10);
        if(day == result) {
            return v.main.temp_max;
        }                
    });
    
    // 최고기온 정렬
    maxArr.sort((a, b) => b - a);
    let temp_max = maxArr[0];   // 예보 최고기온 temp_max


    // 최종 최고기온 (오차 줄이기 위해 실시간 최고기온과 3시간단위 예보 오늘 최고기온 비교해서 반환)
    let max = 0;

    if(temp_max > json.main.temp_max) {
        max = temp_max;
    } else if(temp_max < json.main.temp_max) {
        max = json.main.temp_max;
    } else {
        max = json.main.temp_max;
    }




    /** 클릭 이벤트: 상세정보 */
    area1.addEventListener('click', e=> {
        e.preventDefault();

        document.querySelector('#sky').innerHTML = `<img src="${iconUrl}" alt="${description}">`+ '</br>' + `${description}`;
        document.querySelector('#now').innerHTML = '<span class="material-symbols-outlined">thermostat</span>' + json.main.temp.toFixed(0) + '℃';
        document.querySelector('#low').innerHTML = '최저기온' + '</br>' + min.toFixed(0) + '℃';
        document.querySelector('#high').innerHTML = '최고기온' + '</br>' + max.toFixed(0) + '℃';
        document.querySelector('#rain_persent').innerHTML = '<span class="material-symbols-outlined">water_drop</span>' + '</br>' + '강수확률' + '</br>' + (list[0].pop)*100 + '%';
        document.querySelector('#hum').innerHTML = '<span class="material-symbols-outlined">waves</span>' + '</br>' + '습도' + '</br>' + json.main.humidity + '%';
        document.querySelector('#wind').innerHTML = '<span class="material-symbols-outlined">air</span>' + '</br>' + '풍속' + '</br>' + json.wind.speed + 'm/s';

        document.querySelector('.detail').style.display = 'block';
    });

    document.querySelector('#exit').addEventListener('click', e => {
        e.preventDefault();

        document.querySelector('.detail').style.display = 'none';
    });

}