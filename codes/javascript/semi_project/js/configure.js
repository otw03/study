// API url, key
const ow_data_url = "http://api.openweathermap.org/data/2.5/";  // openweather url
const ow_img_url = "http://openweathermap.org/img/wn/";         // openweather icon url
const ow_key = "serviceKeyValue";              // openweather key
const ow_params = '?appid=' + ow_key +'&lang=kr&units=metric';  // openweather parmas
const go_url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";    // 기상청 url
const go_key = "serviceKeyValue";    // 기상청 key

// 도시(지역) 모음
let areaList = {
    서울:["Seoul", "nx=60&ny=127"],// 서울
    강릉:["Gangneung", "nx=92&ny=131"],//강릉(강원도)
    청주:["Cheongju", "nx=69&ny=106"], // 청주(충청북도)
    논산:["Nonsan", "nx=62&ny=97"], // 논산(충청남도)
    포항:["Pohang", "nx=102&ny=94"], // 포항(경상북도)
    창원:["Changwon", "nx=90&ny=77"], // 창원(경상남도)
    전주:["Jeonju", "nx=63&ny=89"], // 전주(전라북도)
    목포:["Mokpo", "nx=50&ny=67"], // 목포(전라남도)
    제주:["Jeju", "nx=52&ny=38"], // 제주(제주도)
    울릉도독도:["Ulchin", "nx=102&ny=115"] // 울진(울릉도/독도)
}; 