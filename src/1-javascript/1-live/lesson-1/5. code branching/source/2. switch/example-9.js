let n = 0;

switch (4) {
    default:
        console.log("I don't know this number!");
        break;
    case n + 1:
        n = 1;
        console.log(n);
        break;
    case n + 2:
        n = 2;
        console.log(n);
        break;
    case n + 3:
        n = 3;
        console.log(n);
        break;
}

console.log('last', n);
