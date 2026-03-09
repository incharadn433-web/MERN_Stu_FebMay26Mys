// Array basics
console.log("Array basics");
//Creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"Rx"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using constructor
let fruits = new Array("Orange","Mango","Apple");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//Push
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();

//unshift:adds to beginning
fruits.unshift("Grapes");
console.log(fruits);

//shift:remove from beginning
fruits.shift();
console.log(fruits);

