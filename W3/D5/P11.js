const btn =document.getElementById("compareBtn");
btn.addEventListener("click",function(e){
    console.log("Regular function");
    console.log("this === btn",this===btn);
    console.log("e cuurent target === btn",e.cuurentTarget===btn);
});
btn.addEventListener("click",(e)=>{
    console.log("arrow function");
    console.log("this === btn",this===btn);
});