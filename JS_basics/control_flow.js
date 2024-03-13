//controlflows are nothing but if else statements
// if(true){
//     console.log("hello all");
// }
// else{
//     console.log("hi ");
// }
// //ex-2
// let num=89
// if(num>90){
//     console.log("num is greater then 90");
// }
// else{
//     console.log("less than 90")
// }
//operators -> <,>,<=,>=,!=,===,!==,==
let greaterthanequal="90"
if(greaterthanequal==90){
    console.log("number is greater");
}
else{
    console.log("number is smaller");
}
//strict check
let strictcheck="90"
if(strictcheck===90){
    console.log("number is greater");
}
else{
    console.log("number is smaller");
}
//not equals
let notequal=91
if(notequal!=90){
    console.log("number is greater");
}
else{
    console.log("number is smaller");
}
let notequal1="90"
if(notequal1!==90){
    console.log("number is greater");
}
else{
    console.log("number is smaller");
}
//nested if
let score=50
if(score>90){
    console.log(" gud");
    if(score>95){
        console.log("A+ grade");
    }
    else{
        console.log("A grade")
    }
}
else if(score > 80){
    console.log("gud")
    if( score > 85 && score <90){
        console.log(" b grade");
    }
}
else{
    console.log("c grade");
}
//switch statments
let month=4
switch (month) {
    case 1:
        console.log(" Jan");
        
        break;
    case 2:
        console.log(" feb");
            
        break;
    case 3:
        console.log(" march");
        
        break;
    case 4:
        console.log(" april");
        
        break;
    

    default:
        console.log("pls enter crct month");
        break;
}
//switch 2
const months=3
switch (months) {
    case 1:
        let no_of_days=31
        let workingdays=22
        let hoildays=9
        let total=workingdays+hoildays
        if(total==no_of_days)
        {
            console.log("perfect")
        }
        else{
            console.log("somedays are missing");
        }
        
        break;
    case 2:
        let no_of_days1=29
        let workingdays1=22
        let hoildays1=9
        let total1=workingdays1+hoildays1
        if(total1==no_of_days1)
        {
            console.log("perfect")
        }
        else{
            console.log("somedays are missing");
        }
            
        break;

    default:
        console.log("enter correct month");
        break;
}
//truthy and falsy values
//truthy-> [],'0','false',' ',{},
//falsy-> 0,-0,0n,'',false,null,undefined
let truthy=' '
if(truthy){
    console.log("values are true");
}
else{
    console.log("value is false");
}
//??
let val;
val=5??10
val=null??19
val=undefined??78
val=null??undefined
val=undefined??null
console.log(val);
//terinary operator
//condition?true:false
const a=90;
(a>89) ? console.log("true"):console.log("false");







