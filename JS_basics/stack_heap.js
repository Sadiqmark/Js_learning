//stack memory -where a variable has a copy but not the reference
let initialMemory=90
let copiedMemory=initialMemory
 
let anotherCopied=copiedMemory
copiedMemory=64
initialMemory=89
console.log(initialMemory); //89
console.log(copiedMemory); //90
console.log(anotherCopied)

//heap: where it refer the data

let userOne={
    email:"Sadiq@email",
    id:78
}
let userTwo=userOne
userOne.email="khan@gmail"
// console.log(userOne)
// console.log(userTwo)