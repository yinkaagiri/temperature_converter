var tempInF = prompt("Please enter a temperature in fahrenheit");
tempInF = parseInt(tempInF);
var tempInCelsius = ( tempInF - 32) / 1.8;

var tempInKelvin = ( tempInF + 459.67) / 1.8;

console.log("Starting_Temp: " + tempInF + " degrees Fahrenheit");
console.log("Celsius_Temp: " + tempInCelsius + " degrees Celsius");
console.log("Kelvin_Temp: " + tempInKelvin + " degrees Kelvin");
