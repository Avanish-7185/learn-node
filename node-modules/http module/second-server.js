const http = require("node:http");
const fs = require("node:fs");
const { log } = require("node:console");

let file= fs.readFileSync("./htmlTemplate.html","utf-8")
const name="Avanish Shukla"
file=file.replace("{{name}}",name)
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end(file)
})

server.listen(4000,()=>{
    console.log("Server Started at port 4000");
})