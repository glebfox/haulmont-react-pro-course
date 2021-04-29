/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 *
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// РЕШЕНИЕ

function getDivisors(value) {
    if (typeof value !== 'number') {
        throw new TypeError('passed parameter is not a number');
    }

    if (value < 1) {
        throw new TypeError('passed value must be greater than or equal to 1');
    }

    let divisor = 2;
    let divisors = [1];
    while (divisor <= value) {
        if (value % divisor === 0) {
            divisors = [...divisors, divisor];
        }
        divisor++;
    }

    return divisors;
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]

