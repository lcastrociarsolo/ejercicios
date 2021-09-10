
//EJERCICIO 5
let arrayOneToTen= [];

for(let i=1; i<=10; i++){
    arrayOneToTen.push(i);
}

let newArray = arrayOneToTen.map(num => num*2);
console.log(newArray);

//EJERCICIO 6

let arrayOverFive = newArray.filter(num=> num>5);
console.log(arrayOverFive);

//EJERCICIO 7

let firstLargerThanTen = newArray.find(num => num>10);
console.log(firstLargerThanTen);

//EJERCICIO 8

let pokemones = [ { nombre: 'pikachu', poder: 12 }, { nombre: 'bulbasaur', poder: 6 }, { nombre: 'charizard', poder: 19 }, { nombre: 'squirtle', poder: 3 }, { nombre: 'mewto', poder: 6 }, ]

let powerLessThanTen = pokemones.filter(pokemon => pokemon.poder < 10);
console.log(powerLessThanTen);

