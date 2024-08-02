const apikey="ad29cc2c8051c26c089a0b16765e812b";
const form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const cityName=document.getElementById('city-name').value;
    getWeatherData(cityName);
})
async function getWeatherData(cityName){
    try{
   let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`;
   console.log(url); 
   const response=await fetch(url);
   const data= await response.json();
   showWeatherInfo(data);
   }
   catch(error){
    alert('Sorry! City Is Not in My Database...')
} 
}
function showWeatherInfo(data){
 console.log(data);
 const weatherInfo= document.getElementById('weather-info');
 let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png"; 
 weatherInfo.innerHTML=`
 <h3>CountryCode:${data.sys.country}</h3>
 <h3>CityName:${data.name}</h3>
 <p>Temperature:${data.main.temp}F|${Math.round(data.main.temp-273.15)}&deg;C</p>
 <p>Humidity:${data.main.humidity}%</p>
 <p>Air Pressure:${data.main.pressure}&nbsp;hPa</p>
 <p>Weather:${data.weather[0].description}<img src=${imgIcon} height=25 width=5></p>
<p>Wind Speed:${data.wind.speed}m/s</p>
<p>Latitude :${data.coord.lat}&deg;</p> 
<p>Longitude :${data.coord.lon}&deg;</p>

`;
}