const caesar = function(message, shift) {
    let encryptedMessage = "";
    for(let i = 0; i < message.length; i++) {
        encryptedMessage += shiftChar(message.charAt(i), shift);
    }
    return encryptedMessage;
};

function shiftChar(char, shift) {
    // Check case - A-Z = 65-90, a-z = 97-122 unicode values
    const UPPERCASE_OFFSET = 65;
    const LOWERCASE_OFFSET = 97;
    const ALPHABET_SIZE = 26;

    const alphaPattern = /[^a-zA-Z]/;
    if(alphaPattern.test(char)) return char;

    const lowercasePattern = /[a-z]/;
    let unicodeOffset = lowercasePattern.test(char) ? LOWERCASE_OFFSET : UPPERCASE_OFFSET;

    let charValue = char.charCodeAt();

    return String.fromCharCode(modulo(((charValue - unicodeOffset) + shift), ALPHABET_SIZE) + unicodeOffset);
}

function modulo (a,b) {
    return ((a % b) + b) % b;
}



// Do not edit below this line
module.exports = caesar;
