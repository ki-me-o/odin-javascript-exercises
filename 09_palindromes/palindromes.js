const palindromes = function (string) {
    cleanString = removeSeparators(string);
    return (cleanString === reverseString(cleanString));
};

function removeSeparators(string) {
    return string.replaceAll(/[^a-zA-Z0-9]/mg, "");
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
