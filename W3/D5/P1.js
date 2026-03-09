// Basics of Click event

const button = document.getElementById("clickBtn");
button.addEventListener("click",function(){
    console.log("Button is clicked");
});
button.addEventListener("click",function(){
    console.log("Second event listner:Button is clicked");
});