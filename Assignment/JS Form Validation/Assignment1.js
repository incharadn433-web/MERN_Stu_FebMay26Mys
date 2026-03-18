const form = document.getElementById("form");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const message = document.getElementById("message");


form.addEventListener("input", function () 
{
    
    if (pass1.value === "" || pass2.value === "") {
        message.textContent = "";
        return;
    }
    if (pass1.value !== pass2.value) {
        message.textContent = "Valid password";
        message.style.color = "red";
    }
    if (pass1.value === pass2.value) {
        message.textContent = "Invalid password";
        message.style.color = "green";
    }
    
});

