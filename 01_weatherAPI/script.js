const apiKey = "b2395ba5c446b9066b3ed263a062535d";
const api = `https://api.openweathermap.org/data/2.5/weather?q=patna&appid=${apiKey}`

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const cityName = document.querySelector(".city");
const cityN = document.querySelector(".cityN");
const weather = document.querySelector(".weatherType");
const windSpeed = document.querySelector(".windSpeed");
const humidity = document.querySelector(".humidityVal");
const temp = document.querySelector(".temp");
const search = document.querySelector(".search");
const image = document.querySelector(".image");
const visible = document.querySelector(".visible");
const message = document.querySelector(".message");


async function getData(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(!response.ok){
    message.style.display = "block";
    visible.style.display = "none";
  } else{
    var data = await response.json();
    weather.innerHTML = data.weather[0].main;
    windSpeed.innerHTML = data.wind.speed + "km/h";
    humidity.innerHTML = data.main.humidity + "%";
    temp.innerHTML = data.main.temp + "°F";
    cityN.innerHTML = data.name;
    const weatherNow = data.weather[0].main;

    if(weatherNow === "Clouds"){
      image.src = "images/cloudy.png"
    } else if(weatherNow === "Clear"){
      image.src = "images/sun.png"
    } else if(weatherNow === "Rain"){
      image.src = "images/rain.png"
    } else if(weatherNow === "Mist"){
      image.src = "images/mist.png"
    } else{
      image.src = "images/snow.png"
    }
    visible.style.display = "block";
    message.style.display = "none";

  }
}


search.addEventListener("click", ()=>{
  getData(cityName.value)
})
