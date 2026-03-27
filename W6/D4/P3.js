//Inspecting request details in an http server

const http = require("http");

const server = http.createServer(function(req,res){
    //WriteHead() sets the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the responsne
    //req.method tells the http method, GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});