//create a function
function myfunc(){
    console.log("hello")
}myfunc()
//func2
function myfunc1(){
    let a=90
    let b=78
    console.log(a+b)
}
console.log(myfunc1())
//parameters & arugements
function funcpara(a,b){
    let c=a*b
    let d=a/b
    console.log(c,d)
}funcpara(2,7)
//return type
function myfunc3(a,b){
    let c= a+b
    return c

}console.log(myfunc3(4,6));
//return ex1
function returnfun(usernmae){
    return(`${usernmae} just logged in`);
}console.log(returnfun("sadiq"))
//default parameter
function defaultfunc(usernmae='sadi'){
    return(`${usernmae} is logged out`)

}console.log(defaultfunc('Khan'))
//n number of parameter
function nfunc(val,val2,...numbers){
    let c=val+val2
    console.log(c)
    return numbers


}console.log(nfunc(8,4,3,2,4,2))
//use object in func
funcobj={
    name:"sadiq",
    class:"khan"
}
function objfunc(myobj){
    return myobj.class

}console.log(objfunc(funcobj))