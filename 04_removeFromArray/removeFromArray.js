const removeFromArray = function(array, ...removals) {
    for(let i = 0; i < removals.length; i++) {
        // Traversing array backwards to avoid affecting upcoming array indices
        for(let j = array.length - 1; j >= 0; j--) {
            if(removals[i] === array[j]) {
                array.splice(j,1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
