// here we will be seeing let varible cases
//case 1;
let a=10
function f(){
    let b=20
    console.log(a,b) //prints 10,20 because a is globally declared
}f()
console.log(a); // prints 10

// console.log(b); // prints error because out of scope.//
// case 2 : out of scope
let a=20
function f(){
    if(true){
        let b=23
        console.log(a,b) //prints 20,23
    }
    console.log(b);//prints error
}f()
console.log(a);
// case 3: re assign
let a=90
let a=89
console.log(a); //prints error
// case 4: let re assigned in different scope
let a=78
if(true){
    let a=49
    console.log(a); //prints 49
}
console.log(a); //prints 78
//case 5: hoisting
console.log(a);
let a=90 // prints error



