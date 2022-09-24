// C = (F - 32) x (5/9)
const ftoc = function(fahrenheit) {
  let unroundedCelsius = (fahrenheit - 32) * (5/9);
  return Math.round(unroundedCelsius * 10) / 10;
};

// F = C x (9/5) + 32
const ctof = function(celsius) {
  let unroundedFahrenheit = celsius * (9/5) + 32;
  return Math.round(unroundedFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
