const signupForm = document.getElementById("signupForm");
const signuppassword = document.getElementById("signupConfirmpassword");
const signupConfirmpassword = document.getElementById("signupConfirmpassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit",function(event){
              event.preventDefault();
              
              //password validation
      const password1= signuppassword.value;
       if(!password1){
            message.textContent = "password is required";
            message.style.color = "red";
            signuppassword.focus();
            return;
         } 

         //check length of password
         if(password1.length < 8){
            message.textContent = "password must be atleast 8 characters long";
            message.style.color = "red";
            signuppassword.focus();
            return;
         } 
         //check UPPERCASE characters
         if(!/[A-Z]/.test(password1)){
            message.textContent = "password must have atleast 1 UPPERCASE character.";
            message.style.color = "red";
            signuppassword.focus();
            return;
         } 
         //check lowercase characters
         if(!/[a-z]/.test(password1)){
            message.textContent = "password must have atleast 1 lowercase character.";
            message.style.color = "red";
            signuppassword.focus();
            return;
         } 
         //check number
         if(!/\d/.test(password1)){
            message.textContent = "password must have atleast 1 digit in it.";
            message.style.color = "red";
            signuppassword.focus();
            return;
         } 
         //check special chars
         if(!/[@#$%&*!]/.test(password1)){
            message.textContent = "password must have atleast 1 special character @#$%&*!.";
            message.style.color = "red";
            signuppassword.focus();
            return;
         }    
signupForm.addEventListener("submit",function(event){
              event.preventDefault();
              
      const password = signupConfirmpassword.value;
       if(!password){
            message.textContent = "password is required";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 

         //check length of password
         if(password.length < 8){
            message.textContent = "password must be atleast 8 characters long";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 
         //check UPPERCASE characters
         if(!/[A-Z]/.test(password)){
            message.textContent = "password must have atleast 1 UPPERCASE character.";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 
         //check lowercase characters
         if(!/[a-z]/.test(password)){
            message.textContent = "password must have atleast 1 lowercase character.";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 
         //check number
         if(!/\d/.test(password)){
            message.textContent = "password must have atleast 1 digit in it.";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 
         //check special chars
         if(!/[@#$%&*!]/.test(password)){
            message.textContent = "password must have atleast 1 special character @#$%&*!.";
            message.style.color = "red";
            signupConfirmpassword.focus();
            return;
         } 
         if(password1 === password){
             message.textContent = "Valid password";
            message.style.color = "red";
            signuppassword.focus();
         }
         else{
            message.textContent = "InValid password";
            message.style.color = "red";
            signupConfirmpassword.focus();
        
         }
        });
        });
   
   