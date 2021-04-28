'use strict';

console.log(value); // ReferenceError: value is not defined 

if (true) {
    let value = 1;
}

console.log(value); // ReferenceError: value is not defined