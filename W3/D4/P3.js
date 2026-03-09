// Array map
let prices = [100,200,300,400];

let priceWithGST = prices.map(price => price +price*0.18);
console.log("price without tax",prices);
console.log("price with tax",priceWithGST);

//Using map to extract files
let users = [
    {name:"Chandu",age:24},
    {name:"Inchu",age:21}
];
let names = users.map(user => user.age);
console.log(" ",names);