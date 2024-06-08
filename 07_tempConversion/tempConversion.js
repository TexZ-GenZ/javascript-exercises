const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32)*(5/9);

  if (Math.floor(tempInCelsius) === tempInCelsius) {
    return tempInCelsius;
  }
  return Number(tempInCelsius.toFixed(1));

};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = (9/5)*(tempInCelsius) + 32;

  if (Math.floor(tempInFahrenheit) === tempInFahrenheit) {
    return tempInFahrenheit;
  }
  return Number(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
