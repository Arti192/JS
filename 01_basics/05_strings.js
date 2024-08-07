const name = "Alina"
const repoCount = "3"

//console.log(name + repoCount+ " Value")

console.log(`Hello my name is ${name} and my repocount is ${repoCount}` )

const gameName = new String('alina-hc-hello')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))
// console.log(gameName.length)

// console.log(gameName.toUpperCase())

// console.log(gameName.split('-'))
const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "   Alina   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://alina.com/alina%20diaz"
console.log(url.replace('%20', '-'))

console.log(url.includes('Beauty'))
