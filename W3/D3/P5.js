// Basics of Objects
 const person ={
    name:"Inchara",
    age:21,
    isStudent:false
 }
//  console.log("person",person);
//  console.log("name",person.name);
//  console.log("age",person['age']);

//Add a new property
person.city = "Mandya";
console.log("person",person);

//Modify
person.age = 22;
console.log("person",person);

//delete
delete person.isStudent;
console.log("person",person);

//Object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log("car",car);