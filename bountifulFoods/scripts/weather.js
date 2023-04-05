const q = "Carlsbad";
const lat = "33.566706578763274";
const lon = "-117.78000970931296";
const units = "imperial";
const apiid = "485855895463088afe35950e9085cc78";

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiid}&units=${units}`;

function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.substr(1); 
        })
        .join(' ');
}

function displayResults (forecast) {
    // Grab the container
    let container = document.querySelector(".weather-grid");
    
    // Current Date
    const today = new Date();
    const locale = "en-US"

    // Current Weather
    let card = document.createElement('section');
    let img = document.createElement('img');
    let condition = document.createElement('p');
    let temp = document.createElement('p');
    let humid = document.createElement('p');

    imgAddress = `https://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`
    img.setAttribute('src', imgAddress);
    condition.textContent = `${toUpper(forecast.current.weather[0].description)}`
    temp.innerHTML = `Current Temperature: ${forecast.current.temp} &deg;F`;
    humid.textContent = `Current Humidity: ${forecast.current.humidity}%`;

    card.appendChild(img);
    card.appendChild(condition);
    card.appendChild(temp);
    card.appendChild(humid);

    let forecastHead = document.createElement('h1');
    forecastHead.textContent = "3 Day Forecast"
    container.appendChild(card);
    container.appendChild(forecastHead);
    
    forecast.daily.forEach((element, index) => {
        // Only forecast for NEXT 3 days, not just today
        if ((index < 4) && (index != 0)) {
            console.log(`Processing index ${index}`);
            
            //Create the Predicted Dates
            let forecastDay = new Date();
            forecastDay.setDate(today.getDate() + index);
            
            // Create elements for the card
            let card = document.createElement('section');
            let weekday = document.createElement('h2');
            let img = document.createElement('img');
            let condition = document.createElement('p');
            let temp = document.createElement('p');
            let humid = document.createElement('p');

            //Populate the card Elements
            card.setAttribute('class', 'card');
            weekday.textContent = forecastDay.toLocaleDateString(locale, {weekday: 'long'});
            imgAddress = `https://openweathermap.org/img/wn/${forecast.daily[index].weather[0].icon}@2x.png`
            img.setAttribute('src', imgAddress);
            condition.textContent = `${toUpper(forecast.daily[index].weather[0].description)}`
            temp.innerHTML = `Estimate High: ${forecast.daily[index].temp.max} &deg;F`;
            humid.textContent = `Estimated Humidity: ${forecast.daily[index].humidity}%`;

            //Add the Elements to the card
            card.appendChild(weekday);
            card.appendChild(img);
            card.appendChild(condition);
            card.appendChild(temp);
            card.appendChild(humid);

            //Add and post the card to the page
            container.appendChild(card);
        }
    });
}

async function apiFetch () {
    const response = await fetch(url);
    try {
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();