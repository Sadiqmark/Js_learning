//objects
//create object
const myobj={
    username: "sadiq",
    email:"sadiq@gmail.com",

}
//accessing
console.log(myobj.username)
//type-2
const myobj2= new Object()
//nested objects
const username={
    Id:56,
    fullName:{
        firstName:"Sadiq",
        lastName:"Khan"
    },
    Email:"Sadiq@gmail.com",
    DOB:{
        Month:"October",
        Date:8,
        year:2000

    },

}
console.log(username.DOB.year);
//destructure
const {Email:mail}=username
console.log(mail)
//destruture
const {DOB: mon}=username
console.log(mon);

//function
//type-1
function myfunc(){
    console.log("hello")
}
myfunc()
//function type-2
const myfunc1=function(){
    console.log("hii");
}
myfunc1()
//object with function
let supply={
    supplyname:"food",
    supplyId:67,
    greeting:function()
    {
        console.log(`${this.supplyname}, welcome to supply chain`)
    }
}
supply.greeting()
//accesing object inside function
const obj2={
    username:"fun",
    Id:56
}
const objfunc=function(anyobj){
    console.log(anyobj.username)
}
objfunc(obj2)
//arrow function
//type-1
//=()=>{} ....arrow function syntax
const myarrow=()=>{
    console.log("hello")
}
myarrow()
//type-2
const myarrow2=()=> (console.log("hii"))
myarrow2()
