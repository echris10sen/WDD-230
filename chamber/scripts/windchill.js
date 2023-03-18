function randomtemp () {
    let temp = Math.round(Math.random() * 100 - 50);
    console.log(temp);
    return temp;
}
const q = "Redford";
const units = "imperial";
const apiid = "485855895463088afe35950e9085cc78";

const docTemp = document.querySelector('#temp');
const docWind = document.querySelector('#windspeed');
const docSpeed = document.querySelector("#windchill");
const wImg = document.querySelector("figure img");
const caption = document.querySelector("figcaption");

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

function windchill(temp, wind) {
    console.log(`Calculating Temp:${temp} Wind:${wind}`);
    let chill;
    if (temp <= 50 && wind > 3) {
        
        chill = Math.round (35.74 + .6215 * temp - (35.75*(wind**0.16)) + .4275*temp*wind**.16);
        console.log(chill);
        return chill;
    }
    else {
        chill = "N/A";
        return chill;
    }
}

function displayResults(weatherData) {
    // Finding Values
    let temp = weatherData.main.temp;
    let wind = weatherData.wind.speed;
    let chill = windchill(temp, wind);
    
    // Setting Values 
    docTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
    docWind.innerHTML = `<strong>${wind.toFixed(0)}</strong>`;
    docSpeed.innerHTML = `<strong>${chill.toFixed(0)}</strong>`;

    let imgAddress = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    let wdesciption = weatherData.weather[0].description; 

    wImg.setAttribute('src', imgAddress);
    wImg.setAttribute('alt', wdesciption)
    caption.innerText = toUpper(wdesciption);
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