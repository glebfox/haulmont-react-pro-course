let n = 0;

// ПЛОХО!!!
switch (2) {
    case n + 1: {
        n = 1;
        console.log(n);
        break;
    }
    case n + 2:
        n = 2;
        console.log(n);
        break;
    case n + 3:
        n = 3;
        console.log(n);
        break;
    default:
        console.log("I don't know this number!");
}

console.log('last', n);
