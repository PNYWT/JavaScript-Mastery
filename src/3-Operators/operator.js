let additionResult = 5 + 3;
let subtractionResult = 5 - 3;
let multiplicationResult = 4 * 6;
let divisionResult = 20 / 4;

let modulusResult = 10 % 2

console.log("additionResult: ", additionResult);
console.log("subtractionResult: ", subtractionResult);
console.log("multiplicationResult: ", multiplicationResult);
console.log("divisionResult: ", divisionResult);
console.log("modulusResult: ", modulusResult);

let a = 5;
let b = 6;
console.log(a == b);
console.log(a == b ? "This True" : "This False");

if (a == b) {
    console.log("This True");
} else {
    console.log("This False");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple 🍎");
    break;
  case "banana":
    console.log("This is a banana 🍌");
    break;
  default:
    console.log("Unknown fruit");
}
