const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4)); // 12
const myName = (name) => {
    return `I'm ${name}`;
};
console.log(myName("Xcode")); // 12
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]
let abc = numbers.map((num) => {
    return num * 2;
});
console.log(abc); // [2, 4, 6, 8, 10]
export {};
//# sourceMappingURL=arrowFunction.js.map