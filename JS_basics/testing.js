// var a = 5;
// function first() {
//     a = 6;
// }

// function second() {
//     console.log(a);
// }second()
function a(item,group){
    return group.push(item)
}
const res=a('dog',['cat','ant'])
// console.log(res);

a=['cat','ant']
b='dog'
let res1=a.unshift(b)
console.log(res1);
console.log(a)


let myarr=['cat','dog']
myarr.push('ant')
// console.log(myarr);