//innerText & textContent
//innerText:visible rendered text only
//textContent:all text nodes regardless of CSS
//innerHTML:ALLOWS READING OR WRITING html MARKUP
//INSIDE AN ELEMENT

const message = document.getElementById("message");

//Another way to change or modify using addeventlistener
document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});
textContentBtn.addEventListener("click",function(){
    message.innerText = "Updated using textContentBtn";
});
ResetBtn.addEventListener("click",function(){
    message.innerText = "Original message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong>Content";
});
