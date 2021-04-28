switch (3 + 2) { // 5
    case '5': // '5' === 5 
        console.log(5); // не сработает
        break;
    default:
        console.log("I don't know this number!");
}

// switch (3 + 2) { // 5
//     case Number('5'): 
//         console.log(5); // сработает
//         break;
//     default:
//         console.log("I don't know this number!");
// }
