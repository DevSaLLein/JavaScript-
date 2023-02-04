// É um tipo primitivo
//É único!

let foo = Symbol('descrição');
let fuu = Symbol('descrição');

console.log(foo === fuu);

obj = {
    [Symbol('name')]: 'Isaac',
    [Symbol('age')]: 16,
    city: 'Dubai'
}

const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map( sym => obj[sym] );

console.log(data);

console.log('-----------------------');

// arr = [1, 2, 3, 4, 5];
// console.log(arr.map( number => 'Número: ' + number));