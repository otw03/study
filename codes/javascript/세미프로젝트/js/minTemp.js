/** 최저기온 minTemp() */ 
function minTemp(w_data, today) {
    let min_temperatures = 0;
    w_data.forEach((v, i) => {
        if(v.category == 'TMN'&&  v.fcstDate == today){
            // console.log(v.fcstValue);
            min_temperatures = v.fcstValue;
        }
    });
    return min_temperatures;
}