const sumAll = function(lowEnd,highEnd) {
    let sum = 0;
    for(let i = lowEnd; i <= highEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
