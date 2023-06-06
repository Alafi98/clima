const keyWeather = '1a765cf32b5a2cd7c8cbbebf5fe10144';
const lat = 44.34;
const lon = 10.99;
  

const nameCity = document.getElementById('name');
const coord = document.getElementById('cloud');
const description = document.getElementById('description');


const currentWeather = async (weather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyWeather}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;


}


currentWeather()
    .then(response => {
    nameCity.innerText = response.name;
    coord.innerText = response.coord; 
    description.innerText = response.wheater[0].icon;
})

.catch(error => console.log(error));



const pais = document.getElementById('pais');
const ciudad = document.getElementById('ciudad');
const estado = document.getElementById('estado');
const longitud = document.getElementById('longitud');
const latitud = document.getElementById('latitud');

const cityParam = async (city) => {
    const url2 =  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${keyWeather}`;
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2)

    return data2;
}

cityParam('Caracas')
    .then(response2 => {
        ciudad.innerText = response2[0].name;
        pais.innerText = response2[0].country;
        estado.innerText = response2[0].state;
        longitud.innerText = response2[0].lon;
        latitud.innerText = response2[0].lat;

    })

.catch(error => console.log(error));







