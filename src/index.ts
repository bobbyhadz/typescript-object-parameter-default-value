export {};

// EXAMPLE 1 - Set default values for function Parameters in TypeScript

function multiply(num: number, by = 10) {
  return num * by;
}

console.log(multiply(10)); // 👉️ 100
console.log(multiply(5, 20)); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Set default value for an Object parameter in TypeScript

// type Person = {
//   name?: string;
//   age: number;
// };

// function getPerson({ name = 'Bobby', age }: Person) {
//   console.log(name);
//   console.log(age);
// }

// getPerson({ age: 30 }); // 👉️ Bobby, 30

// ---------------------------------------------------

// // EXAMPLE 3 - Setting a default value for an entire object parameter

// type Person = {
//   name: string;
//   age: number;
// };

// function getPerson({ name, age }: Person = { name: 'Bobby', age: 30 }) {
//   console.log(name);
//   console.log(age);
// }

// getPerson(); // 👉️ Bobby, 30

// ---------------------------------------------------

// // EXAMPLE 4 - Making an entire object optional without setting default values

// // ✅ Make object optional WITHOUT defaults
// type Person = {
//   name?: string;
//   age?: number;
// };

// function getPerson({ name, age }: Person = {}) {
//   console.log(name);
//   console.log(age);
// }

// getPerson(); // 👉️ undefined, undefined
