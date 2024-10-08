const url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'dfe19f726bmsh40aafabdd02ecd5p115a7djsn613534d2418f',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

// Updated fetchWeather function to accept city as a parameter
const fetchWeather = async (city) => {
    try {
        const response = await fetch(url + city + '/IND', options);  // Append city and country code to the URL
        const result = await response.json();
        console.log(result);  // Log the entire response for debugging

        if (result.main && result.main.temp) {  // Ensure the temp data exists
            let temperature = result.main.feels_like;
            temperature=Math.floor((temperature-32)*5/9);
            temp.innerHTML=temperature +" °C";
            icity.innerHTML=city.toUpperCase();
            humidity.innerHTML=result.main.humidity+" %";
            wind.innerHTML=result.wind.speed +" km/h";
        } else {
            console.log('Temperature data not available for the city.');
        }
    } catch (error) {
        console.error(error);
    }
};
const search = document.querySelector(".isearch");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const icity = document.querySelector(".icity");
const sButton = document.querySelector("#sButton");

sButton.addEventListener('click', () => {
    console.log("clicked");
    let city = search.value.trim();
    console.log(city);  // Log the city name for debugging
    if (city) {  // Check if city is not empty
        fetchWeather(city);  // Pass the city as a parameter to fetchWeather
    } else {
        console.log('Please enter a city name');
    }
});
