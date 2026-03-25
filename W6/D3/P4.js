// Reading & Writting files asynchronously with fs/promises

const { error } = require("console");
const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow() {
    const filePath = path.join(__dirname,"promises-node.txt");

    try{
        await fs.writeFile(filePath,"written using fs/promises. This works with async/await");
        console.log("File writing using fs/promises");

        const content = await fs.readFile(filePath,"utf-8");
        console.log(content);
    }
    catch{
        console.log("Promise-based fs error:",error.message);
    }
}
runPromiseBasedFileFlow();
