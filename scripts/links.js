const weatherIcon = document.getElementById('weather-icon');
const figCaption = document.getElementById('figcaption');
const currentTemp = document.getElementById('current-temp');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'Ribeirão Preto';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
        weatherIcon.src = 'https://fpriscillasantos.github.io/wdd230/images/default-weather.png';
        figCaption.textContent = 'Weather data not available';
    }
}

function displayWeather(data) {
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temp = data.main.temp;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    figCaption.textContent = description;
    currentTemp.textContent = `${temp}°C`;
}

getWeather();