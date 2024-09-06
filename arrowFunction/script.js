'use strict';

// arrow fuction

let year = birthYear => new Date().getFullYear() - birthYear;
console.log('current year:' + new Date().getFullYear(), '|| age:' + year(1999));

let yearsUntilRetirement = birthYear => {
    let age = new Date().getFullYear() - birthYear;
    let retirementyear = 65 - age;
    return retirementyear;
}

console.log(yearsUntilRetirement(1999));

let yearsUntilRetirementOthers = (birthYear, retirementyearOfYourCountry) => {
    let age = new Date().getFullYear() - birthYear;
    let retirementyear = retirementyearOfYourCountry - age;
    return retirementyear;
}

console.log(yearsUntilRetirementOthers(1999, 50));