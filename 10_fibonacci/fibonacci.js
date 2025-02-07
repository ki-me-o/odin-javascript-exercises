const fibonacci = function(sequence, twoAgo = 1, oneAgo = 1, currentSequence = 3) {
    sequence = Number(sequence);
    if(sequence < 0) return "OOPS";
    else if(sequence <= 2) return 1;
    const currentValue = twoAgo + oneAgo;
    return (currentSequence == sequence) ? currentValue : fibonacci(sequence, oneAgo, currentValue, currentSequence + 1);
};

// Do not edit below this line
module.exports = fibonacci;
