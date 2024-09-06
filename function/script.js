'use strict';

logger('araf'); // you can call a function before write the function


// function declaration 
function logger(name) {
    console.log(`my name is ${name}`);
}



//funcion expression(you cant call a function expression before it write)
let grettings = function (name) {
    console.log(`my name is ${name}`);
}



grettings('mridul');