const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4)); // 12
let numbers = [1, 2, 3, 4, 5];
// MARK: MAP
let doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]
let abc = numbers.map((num) => {
    return num * 2;
});
console.log(abc); // [2, 4, 6, 8, 10]
// MARK: Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// MARK: ForEach
numbers.forEach(n => console.log(n));
// MARK: reduce, Sum number
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
// MARK: find where first
const found = numbers.find(n => n > 3);
console.log(found); // 4
// MARK: Find index
let findNumber = 3;
const index = numbers.findIndex(n => n > findNumber);
console.log(index); // 3
export {};
//# sourceMappingURL=arrayMethodFunction.js.map