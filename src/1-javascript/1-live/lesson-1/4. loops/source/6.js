const arr = [1, 2, 3]; // { '0': 1, '1': 2, '2': 3 }

// console.log(typeof []); // 'object'

// const user = {
//     name: 'John',
//     age: 30
// };

for (const index in arr) {
    console.log(`index: ${index}`);
    console.log(`item: ${arr[index]}`);
}

// `index: ${index}` → 'index:' + ' ' + index
