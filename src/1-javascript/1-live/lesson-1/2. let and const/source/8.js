'use strict';

var functionsArray = [];
// var i;
for (var i = 0; i < 2; i++) {
    functionsArray.push(function () {
        return i;
    });
}

console.log(functionsArray);

// functionsArray[0] ← обращение к 1-му элементу массива
// functionsArray[0]  ()

const func1 = functionsArray[0];
const func2 = functionsArray[1];
console.log(func1()); // 2
console.log(func2()); // 2
