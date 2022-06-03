//date and time
let now = new Date();

let time = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

time.innerHTML = `${day}, ${month} ${date}, ${year} ${hours}:${minutes}`;

//name city

function nameCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = citySearch.value;
}

function showTemperature(response) {
  console.log(Math.round(response.data.main.temp));
  let temp = Math.round(response.data.main.temp);
  let temperature = Math.round(temp);
  let showTemperature = document.querySelector("#temperature");
  showTemperature.innerHTML = `${temperature}`;
}

function getWeather(event) {
  event.preventDefault();
  let apiKey = "298f9405a9a634fd43294220b3f6b208";
  let city = document.querySelector("#city-search").value;
  let weatherApi = "https://api.openweathermap.org/data/2.5/weather?";
  axios
    .get(`${weatherApi}&q=${city}&appid=${apiKey}&units=metric`)
    .then(showTemperature);
}
let searchField = document.querySelector("#search-field");
searchField.addEventListener("submit", nameCity);
searchField.addEventListener("submit", getWeather);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "298f9405a9a634fd43294220b3f6b208";
  let weatherApi = "https://api.openweathermap.org/data/2.5/weather?";
  axios
    .get(`${weatherApi}&lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(showTemperature);
}

function getPosition(position) {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getPosition);
