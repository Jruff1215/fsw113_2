// import the convertTemp.js and getDaylight.js scripts with their default export

// import tempConvert from './convertTemp.js'
//  export default function tempConvert() {}
// import daylight from './getDayight.js'
// export default function daylight() {}

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
 document.getElementById('goBttn').addEventListener('click', function() {})
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
const getWeather = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${strCity}&appid=
d061d05fc73a4e9fd9645dd672e04a59`)
    data = await response.json()
    return data
}
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

//data.sys.country data.main.temp arg feeding to convert temp function
//data.main.humidity to display humidity on the app
//data.weather[0].main to display weather conditions on app

//parameters for getDaylight function 
//data.sys.sunrise, data.sys.sunset, data.dt