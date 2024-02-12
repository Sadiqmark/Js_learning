//string length
let word="sadiq"
let result=word.length
console.log(result);
//Extracting string letters
let result1=word.charAt(2)
console.log(result1)
//at() method
let atMethod=word.at(2)
console.log(atMethod)
//charcodeAt() method
let charcodeatmethod=word.charCodeAt(2)
console.log(charcodeatmethod)
//slicing 
let slicing=word.slice(1,4)
console.log(slicing)
let slicingsingle=word.slice(3)
console.log(slicingsingle)
//slicing neg
let sliceneg=word.slice(-3)
console.log(sliceneg)
//lower and upper 
let upper=word.toUpperCase()
console.log(upper)
let lower=word.toLowerCase()
console.log(lower)
//trim
let trimword="  sadiq  "
let trimresult=trimword.trim()
console.log(trimresult)
let trimresult1=trimword.trimEnd()
console.log(trimresult1)
//replace method
let sentence=" hello I am sadiq and work "
let replaceresult=sentence.replace("sadiq","khan")
console.log(replaceresult)
//replace all
let sentence1="hello sadiq and sadiq work in accenture"
let replaceallresult=sentence1.replace(/sadiq/g,"khan")
console.log(replaceallresult)

