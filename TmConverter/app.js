// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

// function celsiusToKelvin(celsius) {
//   return celsius + 273.15;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5/9;
// }

// function fahrenheitToKelvin(fahrenheit) {
//   return (fahrenheit - 32) * 5/9 + 273.15;
// }

// function kelvinToCelsius(kelvin) {
//   return kelvin - 273.15;
// }

// function kelvinToFahrenheit(kelvin) {
//   return (kelvin - 273.15) * 9/5 + 32;
// }

// function main() {
//   let temperature = parseFloat(prompt("Enter the temperature value: "));
//   let unit = prompt("Enter the original unit of measurement (Celsius, Kelvin, Fahrenheit): ").toLowerCase();

//   if (unit === "celsius") {
//       let fahrenheit = celsiusToFahrenheit(temperature);
//       let kelvin = celsiusToKelvin(temperature);
//       console.log(`${temperature} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit and ${kelvin.toFixed(2)} Kelvin.`);
//   } else if (unit === "kelvin") {
//       let celsius = kelvinToCelsius(temperature);
//       let fahrenheit = kelvinToFahrenheit(temperature);
//       console.log(`${temperature} Kelvin is ${celsius.toFixed(2)} Celsius and ${fahrenheit.toFixed(2)} Fahrenheit.`);
//   } else if (unit === "fahrenheit") {
//       let celsius = fahrenheitToCelsius(temperature);
//       let kelvin = fahrenheitToKelvin(temperature);
//       console.log(`${temperature} Fahrenheit is ${celsius.toFixed(2)} Celsius and ${kelvin.toFixed(2)} Kelvin.`);
//   } else {
//       console.log("Invalid unit of measurement.");
//   }
// }

// main();

// function convertTemperature(value, fromUnit) {
//   const units = ["Celsius", "Kelvin", "Fahrenheit"];
//   const conversions = [
//       [(c) => c, (c) => c + 273.15, (c) => (c * 9/5) + 32],
//       [(k) => k - 273.15, (k) => k, (k) => (k - 273.15) * 9/5 + 32],
//       [(f) => (f - 32) * 5/9, (f) => (f - 32) * 5/9 + 273.15, (f) => f]
//   ];
  
//   let fromIndex = units.indexOf(fromUnit);
//   if (fromIndex === -1) {
//       console.log("Invalid unit of measurement.");
//       return;
//   }

//   console.log(`Converting ${value} ${fromUnit}:`);
//   units.forEach((toUnit, toIndex) => {
//       if (toIndex !== fromIndex) {
//           let convertedValue = conversions[fromIndex][toIndex](value);
//           console.log(`${value} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}`);
//       }
//   });
// }

// let value = parseFloat(prompt("Enter the temperature value: "));
// let fromUnit = prompt("Enter the original unit of measurement (Celsius, Kelvin, Fahrenheit): ").trim();

// convertTemperature(value, fromUnit);
// function convertTemperature(value, fromUnit) {
//   let convertedValues = {};

//   if (fromUnit.toLowerCase() === "celsius") {
//       convertedValues.celsius = value;
//       convertedValues.kelvin = value + 273.15;
//       convertedValues.fahrenheit = (value * 9/5) + 32;
//   } else if (fromUnit.toLowerCase() === "kelvin") {
//       convertedValues.celsius = value - 273.15;
//       convertedValues.kelvin = value;
//       convertedValues.fahrenheit = (value - 273.15) * 9/5 + 32;
//   } else if (fromUnit.toLowerCase() === "fahrenheit") {
//       convertedValues.celsius = (value - 32) * 5/9;
//       convertedValues.kelvin = (value - 32) * 5/9 + 273.15;
//       convertedValues.fahrenheit = value;
//   } else {
//       console.log("Invalid unit of measurement.");
//       return;
//   }

//   console.log(`${value} ${fromUnit} is:`);
//   console.log(`${convertedValues.celsius.toFixed(2)} Celsius`);
//   console.log(`${convertedValues.kelvin.toFixed(2)} Kelvin`);
//   console.log(`${convertedValues.fahrenheit.toFixed(2)} Fahrenheit`);
// }

// let value = parseFloat(prompt("Enter the temperature value: "));
// let fromUnit = prompt("Enter the original unit of measurement (Celsius, Kelvin, Fahrenheit): ").trim();

// convertTemperature(value, fromUnit);
