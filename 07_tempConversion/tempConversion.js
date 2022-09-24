// C = (F - 32) x (5/9)
const ftoc = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};

// F = C x (9/5) + 32
const ctof = function(celsius) {
  return celsius * (9/5) + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
