// Reading & Writing files asynchonously with callbacks

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"async-node.txt");

//To write to a file
fs.writeFile(filePath,"This is written asynchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("write error:",writeError.message);
            return;
        }
        console.log("File written synchronously.");
    }
);

const content = fs.readFileSync(filePath,"utf-8",
    function(readError,content){
        if(readError){
        console.log("Read error:",readError.message);
        return;
    }
    console.log(content);
}
);

console.log("Script continues while file operations are in progress.");
