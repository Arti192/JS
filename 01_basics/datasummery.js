// Main 2 Data type in JS

// 1) Primitive(Call by value) 2) Non-Primitive(Call by Referrence)

// Primitive 
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggined = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// const bigNumber = 33333333333333n
// console.log(typeof bigNumber)


// Referent Data Type(Non-Primitive)
// Array, Function, Object

const heros = ["shaktiman", "nagraj", "doga"]

 let MyObj = {
    name : "Alina",
    age : 18,
 }

 const MyFunction = function(){
    console.log("Hello world")
 }

 console.log(typeof outsideTemp)
 console.log(typeof userEmail)
 console.log(typeof MyFunction)
 console.log(typeof heros)
 console.log(typeof my)

