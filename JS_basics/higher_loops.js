//for of loop
let arr=[1,2,3,4,5,6]
let sum=0
for (const i of arr) {
    sum+=i
    // console.log(sum)
    
}
// console.log(sum);
//break when arr element is 6
let breakarray=[1,2,3,45,6,90]
// console.log(breakarray.length);
for (const j of breakarray) {
    // console.log(breakarray[j]);
}
//foreach type-1
let arr1=["mango","apple","banana","kiwi"]
arr1.forEach(function (item){
    // console.log(item);

})
// foreach type-2 arrow func
let arr2=["sadiq","khan","btech"]
arr2.forEach((i)=>{
    // console.log(i);

})
//type-3 seprate func
let arr3=[1,2,3,4]
sum=0
function myfun(j){
    sum+=j
    // console.log(j);

}
arr3.forEach(myfun)
console.log(sum);
//foreach with obj
let objarr=[
    {
        name:"sadiq",
        age:89
    },
    {
        name:"khan",
        age:90
    }
]
objarr.forEach((item)=>{
    // console.log(item.name);
})
//Write a forEach loop to iterate over an array of strings and concatenate all strings together into a single string, separated by spaces.
let strarr=["sadiq","khan","is","btech","student"]
let result=""
function myfunc1(item){
    result=result+" "+item

    
}
strarr.forEach(myfunc1)
console.log(result.trim());
//Write a forEach loop to iterate over an array of numbers and calculate their sum
let num=[1,2,3,4,5,6,7,8,9]
let sum1=0
num.forEach((item)=>{
    sum1+=item
})
// console.log(sum1);
//Write a forEach loop to iterate over an array of sentences and count the number of words in each sentence, printing the count for each sentence to the console.
let sentences=["hello world","im good"]
sentences.forEach((sentence)=>{
    const words=sentence.split(/\s+/)
    const result=words.length
    console.log(result);

})
// let sentences1=["hello world khan ji","im good","hello ji went to india"]
// let finallarr=[]
// for(let i=0;i<sentences.length;i++){
//     let count=0

//     let myarr=sentences[i]
//     for(let j=0;j<myarr.length;j++){
//         if(myarr[j]==" "){
//             count=count+1
//         }

//     }
//     finallarr.push(count+1)


// }

// console.log((finallarr));
//for in loop
let obj1={name:"sadiq",age:90,cls:"10th"}
for (const key in obj1) {
    console.log(obj1[key]);

}