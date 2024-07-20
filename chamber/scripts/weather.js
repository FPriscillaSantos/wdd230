const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecastContainer = document.querySelector('#forecast');

const lat = -21.17; 
const lon = -47.80; 
const apiKey = 'b94871b1c5883343f564fce008a7b0a1';

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function capitalizeDescription(description) {
    return description.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = capitalizeDescription(data.weather[0].description);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")); 
    for (let i = 0; i < 3; i++) {
        const day = forecast[i];
        const date = new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
        const temp = `${day.main.temp} &deg;C`;
        const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        const desc = capitalizeDescription(day.weather[0].description);

        const dayDiv = document.querySelector(`#day${i + 1}`);
        dayDiv.innerHTML = `
            <h5>${date}</h5>
            <img src="${iconSrc}" alt="${desc}">
            <p>${temp}</p>
            <p>${desc}</p>
        `;
    }
}

async function getWeatherData() {
    const weatherData = await apiFetch(weatherUrl);
    const forecastData = await apiFetch(forecastUrl);
    displayCurrentWeather(weatherData);
    displayForecast(forecastData);
}

getWeatherData();