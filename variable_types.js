let name = "Joao";
let age = 23;
let studant = true;
let university; // undefined
let nameUniversity = null;
let id = Symbol("id") // unique value
let bigNumber = 909484848483221n //BigInt

console.log(typeof bigNumber);

let person = {
    name: "Maria",
    age: 23,
    city: "Quixada"
}

let colors = ["blue", "green", "yellow", "pink"]

console.log(String(age));

//Operadores
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // remainder
console.log(a ** b); // Exponencial

a++;
b--;
console.log(a, b)


let number = 10;
number += 5; // 15
console.log(number);
number -= 5; // 10
console.log(number);
number *= 2; // 20
console.log(number);
number /= 2; // 10
console.log(number);
number %= 2; // 0
console.log(number);
