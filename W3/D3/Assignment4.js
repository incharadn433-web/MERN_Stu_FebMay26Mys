// Switch Functions

function getRoute(role, isLoggedIn){
    if(isLoggedIn ){
        console.log("login");
    }else{
        console.log("Already login");
    }
}
getRoute();
    let login = "admin";
switch (login) {
    case "admin":
        console.log("/admin");
        break;
    case "student":    
        console.log("/student");
        break;
    case "college":    
        console.log("/college");
        break;    
    case "proctor":    
          console.log("/proctor");
          break;
    default:  
       console.log("denied");
    break;
}
const greet=function greet(name){
    console.log("Hello,"+name+" !");
}
greet("admin");

