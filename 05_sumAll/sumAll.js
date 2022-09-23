const sumAll = function(num1,num2) {
    let sum = 0;
    let lowEnd, highEnd;
    if (num2 > num1) {
        lowEnd = num1;
        highEnd = num2;
    } else {
        lowEnd = num2;
        highEnd = num1;
    }

    for(let i = lowEnd; i <= highEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
