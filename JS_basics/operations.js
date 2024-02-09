let loggedIn="33abc"
let numberconvert=Number(loggedIn)
console.log(typeof numberconvert)
console.log(numberconvert) //return NAN

//loggedin is null 
let score=null
let convertnull= Number(score)
console.log(convertnull) // gets 0
console.log(typeof convertnull)// number

let logged=undefined
let convertedlogged=Number(logged)
console.log(convertedlogged)
//string opertions

console.log(2+4+"8")
console.log(2+4+"khan"+"")
console.log("sadiq"+9+0+"khan")
let x=10
let y=++x
let z=y++
console.log(x)
console.log(z)
console.log(y)
