/** 실시간 날씨 api호출하는 함수 mainApi() */
async function mainApi(city) {
    // Current weather data url
    let current_url = 'https://api.openweathermap.org/data/2.5/weather';
    let params = '?appid=서비스키&lang=kr&units=metric';
    
    // ajax 결과가 저장될 json
    let json = null;

    // ajax 요청
    try {
        const response = await axios.get(`${current_url}${params}&q=${city}`);
        // console.log(response);
        json = response.data;
        return json;
    } catch (e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.');
        return;
    } finally {
        // 로딩바 닫기
        loading.classList.remove('active');
    }
}
