const date = new Date();

const format = {
    weekday: `long`,
    year: `numeric`,
    month: `long`,
    day: `numeric`
};
let current_date = document.getElementById("largeTemperatureDate").innerText = date.toLocaleDateString(`en-US`, format);

function callApi() {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=1b4d1897ed7749d69a665615251308&q=Panadura&days=1&aqi=no&alerts=no")
        .then(response => response.json())
        .then(data => setDetails(data))

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
   largeTemperaturelocation.innerText = LocationDetails.location.name + " , " + LocationDetails.location.region

}


callApi();

