const fs = require("node:fs");

console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");  //Synchronous file read (blocks the code execution) // encoading->UTF-8
//else default is buffer
console.log(fileContents);

console.log("Second");
fs.readFile("./file.txt", "utf-8", (err, data) => {   //asynchronous file read(non blocking) with "error first" callback functions
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});                            //best for performance driven application

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello World");  //Sync file write (if no such file found it will create a file in that path)


fs.writeFile(             //Async file write with flag (write or append)
    "./greet.txt",
    " Hello Vishwas",
    {
        flag: "a",         //append mode
    },
    (err) => {                 //error first callback
        if (err) {
            console.log(err);
        } else {
            console.log("File written");
        }
    }
);