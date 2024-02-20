//this keyword
const myobj={
    username:"sadiq",
    id:90,
    email:"sadiq@gmail.com",
    greeting :function(){
        console.log(`${this.username}, welcome to js `)

    },
    username:"dinesh"
    
}
myobj.greeting()

const myobj1={
    username:"sadiq",
    id:90,
    email:"sadiq@gmail.com",
    greeting :function(){
        console.log(`${this.username}, welcome to js `)

    },
    username:"dinesh"
    
}
myobj1.greeting()

//this keyword in function
function myfunc(){
    let username="sadiq"
    console.log(this.username)
}
myfunc()
//this in window functionl
let count=0
function mycount(){
    this.count++
    console.log(this);
}
mycount()
mycount()
mycount()
console.log(count)
//arrow function
const myfunc1=()=>{
    console.log("hello")

}
myfunc1()
//arrow function 2nd type
const myfunc3=(num1,num2)=> (num1+num2)

console.log(myfunc3(2,4))
//with obj
const obj1={
    username:"sadiq",
    id:90
}
const userfun=(anyobj)=> console.log(anyobj.username)


userfun(obj1)



