// 9a456e1c8b184e88a0565833230705

// http://api.weatherapi.com/v1/current.json?key=9a456e1c8b184e88a0565833230705&q=London&aqi=no

// const apiKey = 9a456e1c8b184e88a0565833230705;
const api = `http://api.weatherapi.com/v1/current.json?key=9a456e1c8b184e88a0565833230705&q=`
const btn = document.getElementById("getWeather");
const weather = document.getElementById("weather");
const cityBox = document.getElementById("city");
const img = document.getElementById("wImg");

const getWeather = async (api) =>{
    const city = document.getElementById("search").value;
    const fullApi = api + city + "/"; 
    const response = await fetch(fullApi);
    const data = await response.json();
    img.src = data.current.condition.icon;
    weather.innerText = data.current.condition.text;
    cityBox.innerText = `${data.location.name} ${Math.floor(data.current.temp_c)}℃`;
    document.getElementById("search").value = "";
    console.log(data);
}



btn.addEventListener("click", ()=>{
    getWeather(api);
})
