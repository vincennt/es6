// let fruit = ['rasbery']
// let fruits = ['Apple', 'Orange', 'Banana', ...fruit]
// console.log(fruits);

let fruit = ['rasbery']
let fruits = [...fruit, 'Apple', 'Orange', 'Banana']
console.log(fruits);

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = [...arr1, ...arr2]

console.log(arr3);

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
}

const boby = {
    ...user,
    firstName: "bobby"

}
console.log(boby);

const numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach(value => console.log(value));


const numberss = [1, 2, 3, 4, 5, 6]
var result = numberss.filter(number => number % 2 !== 0)
console.log(result);

const numbersss = [1, 2, 3, 4, 5, 6]
var resultat = numbersss.map(number => number * number)
console.log(resultat);