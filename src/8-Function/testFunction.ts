// Function ธรรมดา (แบบมี type กำกับ) return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!

// Function แบบไม่ return (ใช้ void)
function logMessage(message: string): void {
  console.log("Log:", message);
}

logMessage("Hi"); // Log: Hi

// Function กับ Optional / Default Parameter
function introduce(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `${name} (age unknown)`;
}

console.log(introduce("John"));     // John (age unknown)
console.log(introduce("Alice", 25)); // Alice is 25 years old.

// Function ที่ return Object
function createUser(name: string, age: number) {
  return { name, age };
}

let user = createUser("Alice", 25);
console.log(user); // { name: 'Alice', age: 25 }

// Function in Object
let person = {
    name: "JS",
    age: 99,
    upAge: function() {
        person.age += 1;
    }
}
console.log(person);
person.upAge();
console.log(person);

