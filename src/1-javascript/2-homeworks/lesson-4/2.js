/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

function f (...values) {
    let sum = 0;
    for (value of values) {
        if (!(typeof value === 'number')) {
            throw new TypeError(`'${value}' with type '${typeof value}' is not a number`);
        }

        sum += value;
    }

    return sum;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
