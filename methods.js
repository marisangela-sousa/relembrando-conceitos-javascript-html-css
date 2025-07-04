const number = [1, 2, 3, 4];
const multiplication = number.map(number => number * 2);
console.log(multiplication);

const even = number.filter(number => number % 2 === 0);
console.log(even);

const addition = number.reduce((accumulator, number) => accumulator + number, 0);
console.log(addition);