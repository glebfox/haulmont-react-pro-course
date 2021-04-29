/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// РЕШЕНИЕ

function isEven(value) {
    if (typeof value !== 'number') {
        throw new TypeError('passed parameter is not a number');
    }

    return value % 2 === 0;
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
