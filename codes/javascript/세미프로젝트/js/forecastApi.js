/** 기상청 단기예보 api호출하는 함수 forecastApi() */ 
async function forecastApi(city2) {
    // 오늘 날짜를 얻기위한 Date객체
    let date2 = new Date();

    const yy1 = date2.getFullYear();
    const mm1 = date2.getMonth() + 1;
    const dd1 = date2.getDate();

    // 오늘 날짜 today  
    let today = yy1.toString() + mm1.toString() + dd1.toString(); // 얻어온 값은 숫자이기 때문에 문자로 변환해서 합침
    // console.log(today);

    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + '서비스키';
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('260'); 
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); 
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(today); 
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0200'); 
    queryParams += '&' /* encodeURIComponent('nx') + '=' + encodeURIComponent('55') */; 
    // queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); 
    // console.log(queryParams);

    // ajax 결과가 저장될 json
    let json3 = null;

    // ajax 요청
    try {
        const response = await axios.get(`${url}${queryParams}${city2}`);
        // console.log(response);
        json3 = response.data;
        // console.log(json3);
        return json3;
    } catch (e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.');
        return;
    } finally {
        // 로딩바 닫기
        loading.classList.remove('active');
    }
}