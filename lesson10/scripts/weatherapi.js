const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const q = "Fairbanks";
const units = "imperial";
const apiid = "485855895463088afe35950e9085cc78"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiid}&units=${units}`;

function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.substr(1); 
        })
        .join(' ');
}

function displayResults(weatherData) {
    let temp = weatherData.main.temp;
    document.querySelector('#current-temp').innerHTML = `<strong>${temp.toFixed(0)}</strong>`;

    let imgAddress = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    let wdesciption = weatherData.weather[0].description; 
    console.log(imgAddress);
    console.log(wdesciption);


    weatherIcon.setAttribute('src', imgAddress);
    weatherIcon.setAttribute('alt', wdesciption)
    captionDesc.innerText = toUpper(wdesciption);
}

async function apiFetch () {
    const response = await fetch(url);
    try {
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();