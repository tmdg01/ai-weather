const API_KEY = '25a9fa231d449a056ca22c1924744bee';
const CITY_ID = '1488754';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&units=metric&appid=${API_KEY}`;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const forecast = document.getElementById('forecast');
    data.list.forEach((item, index) => {
      if (index % 8 === 0) {
        const date = new Date(item.dt_txt);
        const dayOfWeek = daysOfWeek[date.getDay()];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${dayOfWeek}</h2>
          <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="${item.weather[0].description}">
          <p>${item.weather[0].description}</p>
          <p>Temperature: ${item.main.temp}&deg;C</p>
          <p>Humidity: ${item.main.humidity}%</p>
        `;
        forecast.appendChild(card);
      }
    });
  })
  .catch(error => console.error(error));
