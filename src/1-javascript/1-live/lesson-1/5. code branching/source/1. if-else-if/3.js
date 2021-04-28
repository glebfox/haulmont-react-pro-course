const j = 1;
const i = 1;
const k = 2;

/**
 * Не пишите блоки if таким образом.
 */
if (i == j)
    if (j == k) console.log('i == k');
    else console.log('i != j');

/**
 * Лучше — пишите так.
 */
if (i == j) {
    if (j == k) {
        console.log('i == k');
    } else {
        console.log('i != j');
    }
}
