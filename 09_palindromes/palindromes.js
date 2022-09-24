const palindromes = function (string) {
    standardString = standardizeString(string);
    return (standardString === reverseString(standardString));
};

function standardizeString(string) {
    standardString = string.toLowerCase();
    return standardString.replaceAll(/[^a-zA-Z0-9]/mg, "");
}

function reverseString(string) {
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }
    return reversedString;
}

// Do not edit below this line
module.exports = palindromes;
