// var lat = document.getElementById('lat');
// var long = document.getElementById('long');
// alert('hello');
var home = document.getElementById('home');

async function fetchWeatherData(position){
    // fetching weather data using openweathermap api one-call api
    const api_key = "c2218822b9a72aff0e4e26686dabc07e";
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly&appid=${api_key}`;

    var data = document.getElementById("fetchData");

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    document.getElementById('data').innerHTML = `
    <span class="data-item">Location: ${weather_data.main.timezone}</span>
    <span class="data-item">Wind Speed:${weather_data.main.wind_speed}</span>
    <span class="data-item">Humidity: ${weather_data.main.humidity} </span>
    <span class="data-item">Time Zone:${weather_data.main.timezone} </span>
    <span class="data-item">Pressure:${weather_data.main.pressure} </span>
    <span class="data-item">Wind Direction:${
        weather_data.main.wind_deg
    } </span>
    <span class="data-item">UV Index: ${weather_data.main.uvi}</span>
    <span class="data-item">Feels like: ${Math.round(weather_data.main.temp - 273.15) }<sup>°C</sup></span>
    `
}

function successCallback(position){
    // document.write(position);
    var maindiv = document.getElementById('maindiv');
    console.log(position);



    // // fetching weather data using openweathermap api one-call api
    // const api_key = "c2218822b9a72aff0e4e26686dabc07e";
    // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=alerts&appid=${api_key}`;



    maindiv.innerHTML = `
        <h3>Welcome To The Weather App</h3>
        <p>Here is your current Location</p>
        <p id="Lat">Lat: ${position.coords.latitude} </p>
        <p id="long">Long: ${position.coords.longitude}</p>

        <iframe 
            src = "https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&output=embed"
            width="450"
            height="450"
            framborder="0"
            style="border: 0"
        ></iframe>

        

        
    `
    fetchWeatherData(position);
    
}

function errorCallback(error){

    maindiv.style.background = "black";
    maindiv.innerHTML = `
        <h3>Geolocation is not supported by this browser.</h3>
    `
}

function geolocation(){
    home.style.visibility = "hidden";
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback);
    }else{
        navigator.geolocation.getCurrentPosition(errorCallback);
    }
}




/** 
const btn = document.getElementById(fetchData);

const successCallback = (position) =>{
    // document.write(position);
    console.log(position);
};

const errorCallback = (error) =>{
    // document.write(error);
    console.log(error);
};

// ask user to access current location
// btn.onclick = () => {
function fetch(){
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        // default is false
        // timeout: 5000,
    });
}

btn.onclick = fetch();
// }

// tracking location
// const watchId = 
// btn.onclick = 
// navigator.geolocation.watchPosition(successCallback, errorCallback);

// more tools => sensors => change locations

*/