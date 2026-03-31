//Third-party middleware
//Are available @ npm registry

const express = require("express");
//Middleware to log all the requests
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev")); //use in developer server
app.use(cors()); //Use in production server

app.get("/",function(req,res){
    res.json({
        message:"Third-party middleware executed before this response"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
    
});
