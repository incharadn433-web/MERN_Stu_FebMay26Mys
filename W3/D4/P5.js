// Reduce method
let nums = [5,10,15];
let total = nums.reduce((intermediateSum,current) => intermediateSum + current,0);
console.log(total);
let Avearge = nums.reduce((intermediateSum,current) => intermediateSum + current,0)/nums.length;
console.log(Avearge);

//Reduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((intermediateValue,b) =>{
    intermediateValue[b] = (intermediateValue[b] || 0) + 1;
    return intermediateValue;
},{});
console.log("Item count:",count);