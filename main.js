// logging console output in JS
console.log("Your message!!!");

// you can also interpolate strings
console.log(`An interpolated value: ${2+2}`);

// you can log values in table format
console.table({
    a : 1,
    b : 2,
    c: 3
});

// you can group values
console.group('Start1');
console.log('a');
console.log('b');
console.log('c');
console.groupEnd();

// you can group values
console.group('Start2');
console.log('a');
console.log('b');
console.log('c');
console.groupEnd();