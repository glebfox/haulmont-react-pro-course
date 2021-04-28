'use strict';

const n = 1;

{
    const n = 2;

    console.log(n); // 2
}

console.log(n); // 1
