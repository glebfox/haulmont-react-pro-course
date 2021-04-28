/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
function filter(array, predicate) {
    if (!Array.isArray(array)) {
        throw new TypeError('passed parameter is not an array');
    }

    if (!(typeof predicate === 'function')) {
        throw new TypeError('passed parameter is not a function');
    }

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            newArray = [...newArray, array[i]];
        }
    }
    return newArray;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']
