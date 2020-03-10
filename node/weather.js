const axios = require('axios');
const inquirer = require('inquirer');

function loadWeather(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=92069bf957d02bc300f09ef3edd27e75&fbclid=IwAR1RH3qNcieFGPEHpDJeOpEU5UGj9vpWj_nIAOO3X7GwLFKOcj-XeEgL33U`);
}

inquirer.prompt([{
    type: "input",
    name: "city",
    message: "What is your city?"
}])
    .then(function (answers) {
        const city = answers.city;
        return loadWeather(city);
    })
    .then(function (response) {
        const temp = response.data.main.temp;
        const condition = response.data.weather[0].main;
        const windSpeed = response.data.wind.speed;
        const city = response.data.name;
        const message = `In ${city} the temperature is ${temp}, weather conditions are ${condition}, 
        and the wind speed is ${windSpeed}`;
        console.log(message);
    })


