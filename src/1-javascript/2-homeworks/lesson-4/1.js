/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// РЕШЕНИЕ

function f2(value) {
    if (!(typeof value === 'number')) {
        throw new TypeError('passed parameter is not a number');
    }

    return value ** 3;
}

console.log(f2(2)); // 8
