function randomtemp () {
    let temp = Math.round(Math.random() * 100 - 50);
    console.log(temp);
    return temp;
}

function randomWind() {
    let wind = Math.round(Math.random() * 100)
    console.log(wind);
    return wind;
}

function windchill(temp, wind) {
    console.log(`Calculating Temp:${temp} Wind:${wind}`);
    let chill = Math.round (35.74 + .6215 * temp - (35.75*(wind**0.16)) + .4275*temp*wind**.16);
    console.log(chill);
    return chill;
}
let temp = randomtemp();
let wind = randomWind();
let chill = windchill(temp, wind);

document.querySelector("#temp").textContent = temp;
document.querySelector('#windspeed').textContent = wind;
document.querySelector('#windchill').textContent = chill;