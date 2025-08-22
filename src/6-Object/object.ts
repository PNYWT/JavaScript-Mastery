type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    job?: string;
};

let person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(person); 

person.name = "John"

console.log(person.name);  // "John"

console.log(person); 
person.job = "iOS Dev";
console.log(person); 
