const currentTemp = document.querySelector('#current-temp');
    const currentHumidity = document.querySelector('#current-humidity');
    const nextDayForecast = document.querySelector('#next-day-forecast');
    const weatherIcon = document.querySelector('#weather-icon');
    const weatherDescription = document.querySelector('#weather-description');
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Guayaquil&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98';

    async function apiFetch(){
        try {
            const response = await fetch(url);
            if (response.ok){
                const data = await response.json();
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    function displayResults(data){
        const desc = data.weather[0].description.toUpperCase();
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        currentTemp.textContent = `${data.main.temp.toFixed(0)} °F`;
        currentHumidity.textContent = `${data.main.humidity}%`;
        weatherDescription.textContent = `Description: ${desc}`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);

        // Example: Assuming 'data' includes next day's forecast data
        const nextDay = data.daily[1]; // Next day's forecast
        if (nextDay && nextDay.weather) {
          const nextDayForecastData = nextDay.weather[0].description;
          nextDayForecast.textContent = nextDayForecastData;
        } else {
          nextDayForecast.textContent = 'Forecast unavailable';
        }
      }
      function closeMessage() {
        var message = document.querySelector('.closeable-message');
        message.style.display = 'none'; // Hide the message
    }
    
    // Make an API request to OpenWeatherMap
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Guayaquil&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98')
        .then(response => response.json())
        .then(data => {
            // Get the high temperature from the API response
            var highTemperature = data.main.temp_max;
            
            // Set the high temperature value in the span element
            var highTempSpan = document.getElementById('high-temp');
            highTempSpan.textContent = highTemperature.toFixed(1); // Display temperature in Fahrenheit with one decimal place
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });