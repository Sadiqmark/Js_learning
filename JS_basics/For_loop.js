//for loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
    
}
//Write a for loop that prints even numbers from 2 to 10.
for (let index = 2; index <=10; index++) {
    if(index%2==0){
        // console.log(index)
    }


    
}
//Write a for loop that iterates over an array of names (['Alice', 'Bob', 'Charlie', 'David']) and prints each name to the console.
let arr=['Alice','Bob','charlie','David']
for(let i=0;i<arr.length;i++)
{
    // console.log(arr[i])
}
//Write a for loop that iterates over a string "JavaScript" and prints each character to the console.
let str="JavaScript"
for(let i=0;i<str.length;i++){
    // console.log(str[i])
}
//Write a for loop that calculates the sum of numbers from 1 to 10 and prints the result.
let result=0
for(let i=1;i<=10;i++)
{
    result=result+i
        
}
// console.log(result)
//Write a for loop that iterates over an array of numbers and prints only those numbers which are divisible by 3.
let arr1=[12,3,4,45,30,18,6,5,7]
let divarr=[]
for(let i=0;i<arr1.length;i++){
    let sum=0
    let j=arr1[i]
    // console.log(j);
    while(j>0){
        let rem=j%10
        sum=sum+rem
        j=Math.floor(j/10)
    }
    // console.log(sum);
    if(sum%3==0){
        // console.log(arr1[i])
    }
    divarr.push(arr1[i])
}
// console.log(divarr);
//method-2
for(let i=0;i<arr1.length;i++){
    let constr=arr1[i]
    let conv=constr.toString()
    let summ1=0
    for(let i=0;i<conv.length;i++){
        summ1=summ1+parseInt(conv[i])
        // console.log(summ1);
    }
    if(summ1%3==0){
        // console.log(arr1[i]);
    }
}
//Write a for loop that iterates over an array of numbers and calculates their product (multiplication of all numbers) and prints the result.
let multiarr=[1,2,3,4,5,6]
let multi=1
for(let i=0;i<multiarr.length;i++){
    multi=multi*multiarr[i]

}
console.log(multi)
//Write a for loop that iterates over an array of objects representing students, where each object has name and age properties, and prints "Name: [name], Age: [age]" for each student.
let objarr=[{name:"sadiq",age:22},{name:"ras",age:78}]
for(let i=0;i<objarr.length;i++){
    // console.log(objarr[i].name);
}
//Write a for loop that iterates over an array of words and prints each word in reverse
let revarray=['sadiq','khan']
let finalrev=[]
for(let i=0;i<revarray.length;i++){
    let myarr=revarray[i]
    let reversedarray=""
    for(let j=myarr.length-1;j>=0;j--){
        reversedarray+=myarr[j]

    }
    // console.log(reversedarray)
    finalrev.push(reversedarray)

}
console.log(finalrev);
//Write a nested for loop that generates a multiplication table for numbers from 1 to 5.
for(let i=1;i<=5;i++){
    for(let j=1;j<=10;j++){
        res=i*j
        console.log(`the multi of ${i}*${j}=`,res);
    }

}
