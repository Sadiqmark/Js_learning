// // console.log("sadiq")
// //ccreating call back function
// function temp(a,b,add){
//     return add(a,b) 
// }
// const result=temp(2,3,function (a,b){
//     return a+b
// })
// console.log(result);
//callback-2
// function myfunc(a,mycallback){
//     let result=a
//     mycallback(a)

// }
// function display(a){
//     console.log(a);
    

// }
// myfunc(2,display)
// // call back-3
// // function add(a,b,mycallback){
// //     let a2=a
// //     let b2=b
// //     console.log(a2,b2);
// //     return mycallback(a,b)

// }
// const result=add(2,4)
// function myfunc1(a,b){
//     return a+b
// }
// console.log(result);
//call back-4
// function myfunc(a,b,mycallback){
//     let result=a+b
//     mycallback(result)

// }
// function mycallback(result){
//     console.log(result)
// }
// myfunc(2,6,mycallback)
//call back-5
function myfunc(a,b){
    console.log(`${a} welcome`)
    b()

}
function b(){
    console.log("goodbye");
}
myfunc("sadiq",b)
//  call back last
function sub(a,b,callback){
    console.log(`${a}:a`,`${b}:b`)
    callback(a,b)

}
function callback(a,b){
    let result=a*b
    console.log(result)

}
sub(4,2,callback)