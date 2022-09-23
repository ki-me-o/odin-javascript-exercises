const repeatString = function(string, num) {
    if(num < 0) return "ERROR";

    let repetitiveString = "";
    for (let i = 0; i < num; i++) {
        repetitiveString += string;
    }
    
    return repetitiveString;
};

// Do not edit below this line
module.exports = repeatString;
