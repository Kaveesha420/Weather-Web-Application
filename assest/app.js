const date = new Date();

const format = {
    weekday: `long`,
    year: `numeric`,
    month: `long`,
    day: `numeric`
};
let current_date = document.getElementById("largeTemperatureDate").innerText = date.toLocaleDateString(`en-US`, format);

function callApi(city) {
    fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1b4d1897ed7749d69a665615251308&q=${city}&days=8&aqi=no&alerts=no`
        )
        .then((response) => response.json())
        .then((data) => setDetails(data));
}
function setDetails(LocationDetails) {
    let Location = document.getElementById("location");
    let localtime = document.getElementById("local-time");
    let temperature = document.getElementById("temperature");
    let feelslike = document.getElementById("feels-like");
    let windspeed = document.getElementById("wind-speed");
    let humidity = document.getElementById("humidity");
    let cloudcover = document.getElementById("cloud-cover");
    let uvindex = document.getElementById("uv-index");
    let pressure = document.getElementById("pressure");
    let visibility = document.getElementById("visibility");
    let WindDirection = document.getElementById("wind-direction");
    let dewpoint = document.getElementById("dew-point");
    let heatindex = document.getElementById("heat-index");
    let windchill = document.getElementById("wind-chill");
    let lastupdated = document.getElementById("last-updated");
    let largeTemperature = document.getElementById("largeTemperature");
    let largeTemperaturelocation = document.getElementById("largeTemperaturelocation");
    let large_Img = document.getElementById("largeImg");
    let large_Text = document.getElementById("largeText");

    let h0Time = document.getElementById("h0Time");
    let h0Icon = document.getElementById("h0Icon");
    let h0Text = document.getElementById("h0Text");
    let h0Temp = document.getElementById("h0Temp");

    let h1Time = document.getElementById("h1Time");
    let h1Icon = document.getElementById("h1Icon");
    let h1Text = document.getElementById("h1Text");
    let h1Temp = document.getElementById("h1Temp");

    let h2Time = document.getElementById("h2Time");
    let h2Icon = document.getElementById("h2Icon");
    let h2Text = document.getElementById("h2Text");
    let h2Temp = document.getElementById("h2Temp");

    let h3Time = document.getElementById("h3Time");
    let h3Icon = document.getElementById("h3Icon");
    let h3Text = document.getElementById("h3Text");
    let h3Temp = document.getElementById("h3Temp");

    let h4Time = document.getElementById("h4Time");
    let h4Icon = document.getElementById("h4Icon");
    let h4Text = document.getElementById("h4Text");
    let h4Temp = document.getElementById("h4Temp");

    let h5Time = document.getElementById("h5Time");
    let h5Icon = document.getElementById("h5Icon");
    let h5Text = document.getElementById("h5Text");
    let h5Temp = document.getElementById("h5Temp");

    let h6Time = document.getElementById("h6Time");
    let h6Icon = document.getElementById("h6Icon");
    let h6Text = document.getElementById("h6Text");
    let h6Temp = document.getElementById("h6Temp");

    let h7Time = document.getElementById("h7Time");
    let h7Icon = document.getElementById("h7Icon");
    let h7Text = document.getElementById("h7Text");
    let h7Temp = document.getElementById("h7Temp");

    let h8Time = document.getElementById("h8Time");
    let h8Icon = document.getElementById("h8Icon");
    let h8Text = document.getElementById("h8Text");
    let h8Temp = document.getElementById("h8Temp");

    let h9Time = document.getElementById("h9Time");
    let h9Icon = document.getElementById("h9Icon");
    let h9Text = document.getElementById("h9Text");
    let h9Temp = document.getElementById("h9Temp");

    let h10Time = document.getElementById("h10Time");
    let h10Icon = document.getElementById("h10Icon");
    let h10Text = document.getElementById("h10Text");
    let h10Temp = document.getElementById("h10Temp");

    let h11Time = document.getElementById("h11Time");
    let h11Icon = document.getElementById("h11Icon");
    let h11Text = document.getElementById("h11Text");
    let h11Temp = document.getElementById("h11Temp");

    let h12Time = document.getElementById("h12Time");
    let h12Icon = document.getElementById("h12Icon");
    let h12Text = document.getElementById("h12Text");
    let h12Temp = document.getElementById("h12Temp");

    let day1date = document.getElementById("day1date");
    let day1Icon = document.getElementById("day1Icon");
    let day1MaxT = document.getElementById("day1MaxT");
    let day1MinT = document.getElementById("day1MinT");
    let day1Text = document.getElementById("day1Text");

    let day2date = document.getElementById("day2date");
    let day2Icon = document.getElementById("day2Icon");
    let day2MaxT = document.getElementById("day2MaxT");
    let day2MinT = document.getElementById("day2MinT");
    let day2Text = document.getElementById("day2Text");

    let day3date = document.getElementById("day3date");
    let day3Icon = document.getElementById("day3Icon");
    let day3MaxT = document.getElementById("day3MaxT");
    let day3MinT = document.getElementById("day3MinT");
    let day3Text = document.getElementById("day3Text");

    let day4date = document.getElementById("day4date");
    let day4Icon = document.getElementById("day4Icon");
    let day4MaxT = document.getElementById("day4MaxT");
    let day4MinT = document.getElementById("day4MinT");
    let day4Text = document.getElementById("day4Text");

    let day5date = document.getElementById("day5date");
    let day5Icon = document.getElementById("day5Icon");
    let day5MaxT = document.getElementById("day5MaxT");
    let day5MinT = document.getElementById("day5MinT");
    let day5Text = document.getElementById("day5Text");

    let day6date = document.getElementById("day6date");
    let day6Icon = document.getElementById("day6Icon");
    let day6MaxT = document.getElementById("day6MaxT");
    let day6MinT = document.getElementById("day6MinT");
    let day6Text = document.getElementById("day6Text");

    let day7date = document.getElementById("day7date");
    let day7Icon = document.getElementById("day7Icon");
    let day7MaxT = document.getElementById("day7MaxT");
    let day7MinT = document.getElementById("day7MinT");
    let day7Text = document.getElementById("day7Text");

    


   Location.innerText = "Location : " + LocationDetails.location.name + " , " + LocationDetails.location.region; 
   localtime.innerText = "Local-Time : " + LocationDetails.location.localtime
   temperature.innerText = "Temperature : " + LocationDetails.current.temp_c +"°C / " + LocationDetails.current.temp_f +"°F";
   feelslike.innerText = "Feels-Like : " + LocationDetails.current.feelslike_c +"°C / " + LocationDetails.current.feelslike_f +"°F";
   windspeed.innerText = "Wind-Speed : " + LocationDetails.current.wind_mph + "mph / " + LocationDetails.current.wind_kph + "kph";
   humidity.innerText = "Humidity : " + LocationDetails.current.humidity +"%"
   cloudcover.innerText = "Cloud-Cover : " + LocationDetails.current.cloud +"%"
   uvindex.innerText = "UV-Index : " + LocationDetails.current.uv
   pressure.innerText = "Pressure : " + LocationDetails.current.pressure_mb +"hpa"
   visibility.innerText = "Visibility : " + LocationDetails.current.vis_km + "km"
   WindDirection.innerText = "Wind-Direction : " + LocationDetails.current.wind_dir
   dewpoint.innerText = "Dew-Point : " + LocationDetails.current.dewpoint_c + "°C / " + LocationDetails.current.dewpoint_f +"°F";
   heatindex.innerText = "Heat-Index : " + LocationDetails.current.heatindex_c + "°C / " + LocationDetails.current.heatindex_f +"°F";
   windchill.innerText = "Wind-Chill : " + LocationDetails.current.windchill_c + "°C / " + LocationDetails.current.windchill_f +"°F";
   lastupdated.innerText = "Last-Updated : " + LocationDetails.current.last_updated
   largeTemperature.innerText = LocationDetails.current.temp_c +"°C"
   largeTemperaturelocation.innerText = LocationDetails.location.name + " , " + LocationDetails.location.region + ", " + LocationDetails.location.country;
   large_Img.src = LocationDetails.current.condition.icon
   large_Text.innerText = LocationDetails.current.condition.text

    h0Time.innerText = LocationDetails.forecast.forecastday[0].hour[0].time +" AM"
    h0Icon.src = LocationDetails.forecast.forecastday[0].hour[0].condition.icon
    h0Text.innerText = LocationDetails.forecast.forecastday[0].hour[0].condition.text
    h0Temp.innerText = LocationDetails.forecast.forecastday[0].hour[0].temp_c + "°C"

    h1Time.innerText = LocationDetails.forecast.forecastday[0].hour[1].time +" AM"
    h1Icon.src = LocationDetails.forecast.forecastday[0].hour[1].condition.icon
    h1Text.innerText = LocationDetails.forecast.forecastday[0].hour[1].condition.text
    h1Temp.innerText = LocationDetails.forecast.forecastday[0].hour[1].temp_c + "°C"

    h2Time.innerText = LocationDetails.forecast.forecastday[0].hour[2].time +" AM"
    h2Icon.src = LocationDetails.forecast.forecastday[0].hour[2].condition.icon
    h2Text.innerText = LocationDetails.forecast.forecastday[0].hour[2].condition.text
    h2Temp.innerText = LocationDetails.forecast.forecastday[0].hour[2].temp_c + "°C"

    h3Time.innerText = LocationDetails.forecast.forecastday[0].hour[3].time +" AM"
    h3Icon.src = LocationDetails.forecast.forecastday[0].hour[3].condition.icon
    h3Text.innerText = LocationDetails.forecast.forecastday[0].hour[3].condition.text
    h3Temp.innerText = LocationDetails.forecast.forecastday[0].hour[3].temp_c + "°C"

    h4Time.innerText = LocationDetails.forecast.forecastday[0].hour[4].time +" AM"
    h4Icon.src = LocationDetails.forecast.forecastday[0].hour[4].condition.icon
    h4Text.innerText = LocationDetails.forecast.forecastday[0].hour[4].condition.text
    h4Temp.innerText = LocationDetails.forecast.forecastday[0].hour[4].temp_c + "°C"

    h5Time.innerText = LocationDetails.forecast.forecastday[0].hour[5].time +" AM"
    h5Icon.src = LocationDetails.forecast.forecastday[0].hour[5].condition.icon
    h5Text.innerText = LocationDetails.forecast.forecastday[0].hour[5].condition.text
    h5Temp.innerText = LocationDetails.forecast.forecastday[0].hour[5].temp_c + "°C"

    h6Time.innerText = LocationDetails.forecast.forecastday[0].hour[6].time +" AM"
    h6Icon.src = LocationDetails.forecast.forecastday[0].hour[6].condition.icon
    h6Text.innerText = LocationDetails.forecast.forecastday[0].hour[6].condition.text
    h6Temp.innerText = LocationDetails.forecast.forecastday[0].hour[6].temp_c + "°C"

    h7Time.innerText = LocationDetails.forecast.forecastday[0].hour[7].time +" AM"
    h7Icon.src = LocationDetails.forecast.forecastday[0].hour[7].condition.icon
    h7Text.innerText = LocationDetails.forecast.forecastday[0].hour[7].condition.text
    h7Temp.innerText = LocationDetails.forecast.forecastday[0].hour[7].temp_c + "°C"

    h8Time.innerText = LocationDetails.forecast.forecastday[0].hour[8].time +" AM"
    h8Icon.src = LocationDetails.forecast.forecastday[0].hour[8].condition.icon
    h8Text.innerText = LocationDetails.forecast.forecastday[0].hour[8].condition.text
    h8Temp.innerText = LocationDetails.forecast.forecastday[0].hour[8].temp_c + "°C"

    h9Time.innerText = LocationDetails.forecast.forecastday[0].hour[9].time +" AM"
    h9Icon.src = LocationDetails.forecast.forecastday[0].hour[9].condition.icon
    h9Text.innerText = LocationDetails.forecast.forecastday[0].hour[9].condition.text
    h9Temp.innerText = LocationDetails.forecast.forecastday[0].hour[9].temp_c + "°C"

    h10Time.innerText = LocationDetails.forecast.forecastday[0].hour[10].time +" AM"
    h10Icon.src = LocationDetails.forecast.forecastday[0].hour[10].condition.icon
    h10Text.innerText = LocationDetails.forecast.forecastday[0].hour[10].condition.text
    h10Temp.innerText = LocationDetails.forecast.forecastday[0].hour[10].temp_c + "°C"

    h11Time.innerText = LocationDetails.forecast.forecastday[0].hour[11].time +" AM"
    h11Icon.src = LocationDetails.forecast.forecastday[0].hour[11].condition.icon
    h11Text.innerText = LocationDetails.forecast.forecastday[0].hour[11].condition.text
    h11Temp.innerText = LocationDetails.forecast.forecastday[0].hour[11].temp_c + "°C"

    h12Time.innerText = LocationDetails.forecast.forecastday[0].hour[12].time +" PM"
    h12Icon.src = LocationDetails.forecast.forecastday[0].hour[12].condition.icon
    h12Text.innerText = LocationDetails.forecast.forecastday[0].hour[12].condition.text
    h12Temp.innerText = LocationDetails.forecast.forecastday[0].hour[12].temp_c + "°C"

    day1date.innerText = LocationDetails.forecast.forecastday[1].date
    day1Icon.src = LocationDetails.forecast.forecastday[1].day.condition.icon
    day1MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[1].day.maxtemp_c + "°C"
    day1MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[1].day.mintemp_c + "°C"
    day1Text.innerText = LocationDetails.forecast.forecastday[1].day.condition.text

    day2date.innerText = LocationDetails.forecast.forecastday[2].date
    day2Icon.src = LocationDetails.forecast.forecastday[2].day.condition.icon
    day2MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[2].day.maxtemp_c + "°C"
    day2MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[2].day.mintemp_c + "°C"
    day2Text.innerText = LocationDetails.forecast.forecastday[2].day.condition.text

    day3date.innerText = LocationDetails.forecast.forecastday[3].date
    day3Icon.src = LocationDetails.forecast.forecastday[3].day.condition.icon
    day3MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[3].day.maxtemp_c + "°C"
    day3MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[3].day.mintemp_c + "°C"
    day3Text.innerText = LocationDetails.forecast.forecastday[3].day.condition.text

    day4date.innerText = LocationDetails.forecast.forecastday[4].date
    day4Icon.src = LocationDetails.forecast.forecastday[4].day.condition.icon
    day4MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[4].day.maxtemp_c + "°C"
    day4MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[4].day.mintemp_c + "°C"
    day4Text.innerText = LocationDetails.forecast.forecastday[4].day.condition.text

    day5date.innerText = LocationDetails.forecast.forecastday[5].date
    day5Icon.src = LocationDetails.forecast.forecastday[5].day.condition.icon
    day5MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[5].day.maxtemp_c + "°C"
    day5MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[5].day.mintemp_c + "°C"
    day5Text.innerText = LocationDetails.forecast.forecastday[5].day.condition.text

    day6date.innerText = LocationDetails.forecast.forecastday[6].date
    day6Icon.src = LocationDetails.forecast.forecastday[6].day.condition.icon
    day6MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[6].day.maxtemp_c + "°C"
    day6MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[6].day.mintemp_c + "°C"
    day6Text.innerText = LocationDetails.forecast.forecastday[6].day.condition.text

    day7date.innerText = LocationDetails.forecast.forecastday[7].date
    day7Icon.src = LocationDetails.forecast.forecastday[7].day.condition.icon
    day7MaxT.innerText = "Max : " + LocationDetails.forecast.forecastday[7].day.maxtemp_c + "°C"
    day7MinT.innerText = "Min : " + LocationDetails.forecast.forecastday[7].day.mintemp_c + "°C"
    day7Text.innerText = LocationDetails.forecast.forecastday[7].day.condition.text

}


 let searchCity = document.getElementById("txtsearch");
 let searchbtn = document.getElementById("btnsearch");

 searchCity.addEventListener("keypress" , (e) => {
        if(e.key === "Enter"){
            let city = searchCity.value
            callApi(city);
        }
 });

 searchbtn.addEventListener("click", (f) => {
    let city = searchCity.value
    callApi(city);
});

 