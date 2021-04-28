const name = 'Pitters';

if (name) {
    if (name === 'Pitter') {
        console.log(name);
    } else {
        console.log("I don't know your name");
    }
} else {
    console.log('Error.');
}

////////////////// Рефакторинг /////////////////////
if (name === 'Pitter') {
    console.log(name);
} else if (name) {
    console.log("I don't know your name");
} else {
    console.log('Error.');
}