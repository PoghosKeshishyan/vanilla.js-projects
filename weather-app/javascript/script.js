/* Selectors */
const input = document.querySelector('form input');
const searchBtn = document.querySelector('form button');
const errorNotice = document.querySelector('.error-notice');
const weather = document.querySelector('.weather')
const weatherIcon = document.querySelector('.weather .weather-icon')
const temp = document.querySelector('.weather .temp');
const city = document.querySelector('.weather .city');
const humidity = document.querySelector('.weather .humidity');
const wind = document.querySelector('.weather .wind');


/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
    input.value = 'Yerevan';
    checkWeather(input.value);
});

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkWeather(input.value);
});


/* Funtions */
async function checkWeather(cityName) {
    if (!input.value.trim()) {
        return;
    }

    const apiKey = '582bee4ac2d5eaeb40cd75155d434769';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
    
    const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);

    if (response.status === 404) {
        errorNotice.style.display = 'flex';
        weather.style.display = 'none';
        return;
    }

    const data = await response.json();

    errorNotice.style.display = 'none';
    weather.style.display = 'flex';
    
    input.value = '';    
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + 'km/h';
    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
}