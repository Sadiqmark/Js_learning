//declare a array
//type-1
let arr1=[1,2,3,4,'sadiq',false]
console.log(arr1);
//type-2: by declaring new keyword
const arr2= new Array(1,2,3,4)
// console.log(arr2)
//type-3
let a=[1,2]
let b=90
let c=[4,6]
let resarr=Array.of(a,b,c)
console.log(resarr.flat(Infinity))
// to find a array value by index number
// console.log(arr2[2])
//to add a number in arrayby push
arr1.push('gk')
console.log(arr1)
//pop 
arr1.pop()
console.log(arr1)
//unshift-
arr1.unshift(90,'sad')
console.log(arr1)
console.log(arr1.includes(90))
//shift
arr1.shift()
console.log(arr1)
//inculdes
console.log(arr1.includes('90'))
//index of
console.log(arr1.indexOf('Sadiq'))
//convert to string by join keyword
let strarr=arr1.join("")
console.log(strarr);
console.log(strarr.toUpperCase())
console.log(strarr.replace(/SADIQ/i,"khan"))
//slice and splice
let newArr=[4,6,3,7,9]
let slicearr=newArr.slice(2,17)
console.log(slicearr)
console.log((newArr));
//splice
let newarr1=[8,5,3,4,7,9]
let splicearr=newarr1.splice(2,5)
console.log(splicearr);
console.log(newarr1)
// accessing elements
let accessarray=[6,5,8,3,9]
console.log(accessarray.indexOf(3))
//concat
let addarr1=[3,4,5]
let addarr2=[8,9,5]
let result=addarr1.concat(addarr2)
console.log((result));
//flat
let faltarr=[1,2,[3,4,[6,7,8]]]
console.log(faltarr.flat(Infinity))
//check whether its array 
console.log(Array.isArray([5,6,7]))
console.log(Array.from("hitesh"))
//sort array
let sortarray=[2,4,1,5,3,]
console.log(sortarray.sort())
let sortarray1=["apple","cat","bu"]
console.log(sortarray1.sort());
console.log(sortarray.reverse())
console.log(sortarray)