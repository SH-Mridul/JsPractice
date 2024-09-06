'use strict';

let names = ['mridul', 'hasan', 'nafiz'];
let ages = new Array(20, 21, 35);

//pushing element into in the last of array 
names.push('babu');
ages.push(19);
console.log(names);
//pop the last element of array
names.pop();
console.log(names);

//add element into first of array
names.unshift('habib');
console.log(names);

//remove first element of array
names.shift();
console.log(names);

//checking array element exist or not
console.log(names.includes('mridul'));
console.log(names.includes('sakib'));

//index of an element
console.log(names.indexOf('nafiz'));

console.log(names[names.length - 1], ages[ages.length - 1]);