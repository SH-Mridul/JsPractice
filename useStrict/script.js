'use strict';
let interface = 'hello'; // it will giving error if we use strict mode
console.log(interface);

/*Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a 
new global variable.In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non - writable properties.
In strict mode, any assignment to a non - writable property, a getter - only property,
 a non - existing property, a non - existing variable, or a non - existing object, will throw an error.*/