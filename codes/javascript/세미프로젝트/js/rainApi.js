/** 5일예보 3시간단위 api호출하는 함수 rainApi() */
async function rainApi(area) {
    // 5days weather data url
    let days_url = 'http://api.openweathermap.org/data/2.5/forecast'
    let params = '?appid=서비스키&lang=kr&units=metric';
    
    // ajax 결과가 저장될 json
    let json2 = null;

    // ajax 요청
    try {
        const response = await axios.get(`${days_url}${params}&q=${area}`);
        json2 = response.data;
        return json2;
    } catch (e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.');
        return;
    } finally {
        // 로딩바 닫기
        loading.classList.remove('active');
    }
}
