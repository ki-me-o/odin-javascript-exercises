const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(summableArray) {
	let arraySum = 0;
  for(let i = 0; i < summableArray.length; i++) {
    arraySum += summableArray[i];
  }
  return arraySum;
};

const multiply = function(multiplicableArray) {
  let product = 1;
  for(let i = 0; i < multiplicableArray.length; i++) {
    product *= multiplicableArray[i];
  }
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let result = 1;
  if(number > 0) {
    for(let i = 1; i <= number; i++) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
