//Handling different HTTP methods in express

const express = require("express");

const app = express();

//To read
app.get("/users",function(req,res){

    res.status(200).json([{messaage:"Success"},
        {id:1,name:"Inchara"},
        {id:2,name:"Keerthi"},
        {id:3,name:"Vikas"}
    ]);
      res.send("Returning all Users");
});

//To create
app.post("/users",function(req,res){
    //res.status() sets HTTP module before
    //sends the response only
    res.status(201).send("User created.");
});
app.listen(3000,function(){
    console.log("Express server running at http://localhost:3000");
    
});