'use strict';

console.log(typeof value); // undefined

{
    // console.log(typeof value); // ReferenceError: Cannot access 'value' before initialization
    let value = 1;
}