//Managing sessions with express-session

const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret:"MysecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000

    }
}));

app.get("/login",function(req,res){
    req.session.user = {
        id:201,
        username:"Inchu",
        role:"student"
    }; 
    res.send("Session details stored after login.")
});

app.get("/profile",function(req,res){
    if(!req.session.user) {
        return res.status(401).json({
            sucess:false,
            message:"No activelogin session loaded"
        })
    }

    res.json({
        success:true,
        sessionUser :req.session.user
    });
});


app.listen(4000,function(){
    console.log("Express-session demo server running at http://localhost:4000");
    
});