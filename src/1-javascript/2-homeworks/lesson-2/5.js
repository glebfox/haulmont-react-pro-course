/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(value, count) {
    console.log(`${value}: ${typeof value}`)
    if (!(Array.isArray(value)
            || typeof value === 'number'
            || typeof value === 'string'
            || typeof value === 'object')) {
        throw new TypeError('passed parameter has incorrect type');
    }

    if (!(typeof count === 'number')) {
        throw new TypeError('passed parameter is not a number');
    }

    // return Array.from({length: count}, (_v, _i) => value);
    return Array(count).fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
