const findTheOldest = function(people) {
    const d = new Date();
    let oldestPerson;
    let oldestAge = 0;
    people.forEach(person => {
        let age =   (person.yearOfDeath != undefined) ?
                    (person.yearOfDeath - person.yearOfBirth):
                    (d.getFullYear() - person.yearOfBirth);
        if(oldestPerson == undefined || age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        } 
    });
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
