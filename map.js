// usage of map function in js
// it is used to transform an array using some predicate

const arr = [1, 2, 3, 4];
console.log("Original array", arr);

const squared_array = arr.map(num => num * num);
console.log("Transformed array", squared_array);