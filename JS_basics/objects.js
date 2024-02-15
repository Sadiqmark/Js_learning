//creating a object
let ourObject={
    name:"sadiq",
    price:90,
    id:78,
    email:"sadiq@gmail.com",
}
console.log(ourObject)
console.log(typeof ourObject)
//object2 type
let ourObj2={
    email:"khan@gmail.com",
    "name":"Khan",
    "Id":89,
} 
console.log(ourObj2);
console.log(typeof ourObj2.Id)
//accesing the values from object
// method-1
console.log(ourObj2.email)
//method-2
console.log(ourObj2["name"])
//method-3 de-structure of object fro accessing
let course={
    email:"khan@google.com",
    price:900,
    courseteacher:"sadiq"

}
let {courseteacher:teacher}=course
console.log(teacher)
course.courseteacher="hitesh"
//assign a symbol to your obj
let mySymbol= Symbol("myfav_hero")
let myObj3={
    name:"sadiq",
    Id:90,
    email:"sadiq@gmail.com",
    [mySymbol]:"Salman"

}
console.log(myObj3[mySymbol]);
// to change the values inside the object
course.price=999
console.log(course.price)
console.log(course)
// teacher="hitesh"
console.log(course)
//creating by function
ourObject.greeting=function(){
    console.log(`heloo all, ${this.price}`);
}
ourObject.greeting()

//nested objects
let nestObj={
    email:'sadiq@microsoft.com',
    name:{
        fullname:{
            firstname:"sadiq",
            lastname:"khan"
        }


    }
}
console.log(nestObj.name.fullname.lastname);
// merge 2 objects
let mergeobj1={
    name1:"sadiq",
    email1:"sadi@flipkart.com",
    age1:21

}
let mergeobj2={
    name:"khan",
    email:"sadiq@flipkart.com",
    age:45
}
let result1=Object.assign({},mergeobj1,mergeobj2)
let result={...mergeobj1, ...mergeobj2};
console.log(result1);
//getting keys
console.log(Object.keys(mergeobj2));
console.log(mergeobj1.hasOwnProperty("sadiq"));