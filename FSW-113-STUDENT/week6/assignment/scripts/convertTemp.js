// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export default function convertTemp(country, temp) {
    
    if (country === 'US') {
        // Fahrenheit
        temp = parseInt((Number(temp) - 273.15) * 1.8 + 32) + 'F'
    } else {
        // Celcius
        temp = parseInt(Number(temp) - 273.15) + 'C'
    }
    return temp
}
