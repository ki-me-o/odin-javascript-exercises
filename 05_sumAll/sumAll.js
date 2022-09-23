const sumAll = function(num1,num2) {
    let sum = 0;
    let lowEnd, highEnd;
    if( verifyNumber(num1) == "ERROR" || verifyNumber(num2) == "ERROR") return "ERROR"

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

function verifyNumber(num) {
    if(num < 0) return "ERROR";
    if(isNaN(num)) return "ERROR";
    if(num === num.toString()) return "ERROR";
    return "VERIFIED"
}
// Do not edit below this line
module.exports = sumAll;
