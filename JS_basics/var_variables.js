//about different testcases of var//
//case-1: global scope//
var a=10
function f(){
    var b=9
    console.log(a,b);
}f()
console.log(a);
//case 2: functional scope//
function f(){
//     var a =11
//     console.log(a);
}f()
console.log(a);// error because of functional scope
// case 3: re assign value to same variable
var a=10
var a=9
console.log(a) //prints 9
// case 4; hoisting the var
console.log(a)
var a=10 // undefined.