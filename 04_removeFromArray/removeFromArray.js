const removeFromArray = function(array, ...removals) {
    console.log("removals = " + removals)
    console.log("removals.length = " + removals.length)
    console.log("removals[0] = " + removals[0])
    
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

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
