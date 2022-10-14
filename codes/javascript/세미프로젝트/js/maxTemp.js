/** 최고기온 maxTemp() */ 
function maxTemp(w_data, today) {
    let max_temperatures = 0;
    w_data.forEach((v, i) => {
        if(v.category == 'TMX'&&  v.fcstDate == today){
            // console.log(v.fcstValue);
            max_temperatures = v.fcstValue;
        }
    });
    return max_temperatures;
}