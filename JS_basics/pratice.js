// How can you add an element to the end of an array and remove an element from the beginning of an array? Provide a code example.

let myArray=[1,2,3,4]
myArray.push(8)
console.log(myArray);
myArray.shift()
console.log(myArray);

// Create an object called person with the following properties: name, age, and city. Then, write a function that takes this object as an argument and returns a string in the format: "Name is age years old and lives in city.

const person={
    name:"sadiq",
    age:20,
    city:"Banglore"
}
function myfunc(item){
    console.log(`${item.name} is ${item.age} years old and lives in ${item.city}` )

}
myfunc(person)
//write a function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula area = π * radius^2.W
let pie=22/7
function circle(radius){
    let area = pie*(radius**2)
    return area


}
console.log(circle(4))
// (area)
// Create an array of objects, each representing a book with properties: title, author, and year. Write a function that takes this array and prints out the titles of all books written before the year 2000.
let arrayOfObjects=[
    book1={
        title:"Mystory",
        author:"Imran",
        year:1994


    },
    book2={
        title:"Mystory",
        author:"Imran",
        year:1994


    }
    
]
console.log(arrayOfObjects)
function titles(items){
    items.forEach(element => {
        console.log(`Name of the book is ${element.title}`)
        
    });

        

    }
    

titles(arrayOfObjects)

function sumArray(numbers) {
    // Your code here
    let summ=0
    for (let index = 0; index < numbers.length; index++) {
        summ=summ+numbers[index]
        
    }
    return summ
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Expected output: 15
// Create an object called car with properties: make, model, year, and a method called getCarInfo that returns a string with the car's details.
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    getCarInfo: function() {
        // Your code here
        return this.make + ' ' + this.model + ' (' + this.year + ')';

    }
};

console.log(car.getCarInfo()); // Expected output: 'Toyota Camry (2020)'

let a=10
let b=90
if(a>b){
    return
}
let sum=a+b
console.log(sum)