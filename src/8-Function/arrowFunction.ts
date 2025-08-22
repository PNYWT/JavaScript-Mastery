const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log(multiply(3, 4)); // 12


const myName = (name: string): string => {
    return `I'm ${name}`;
};
console.log(myName("Xcode")); // 12


let numbers: number[] = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((num: number) => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

let abc = numbers.map((num: number): number => {
  return num * 2;
});
console.log(abc); // [2, 4, 6, 8, 10]


