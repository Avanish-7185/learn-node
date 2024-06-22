const http = require("node:http");
const fs = require("node:fs")

// const myServer= http.createServer((request,response)=>{   //req,response are injected by js automatically to this callback
//         response.writeHead(200,{"Content-Type":"text/plain"});
//         response.end("Welcome to my first server");
// });  // this server will listen to a request and respond according to it everytime a reqeust is made

const myObj={
    name:"Avanish Shukla",
    age:"21",
    role:"SDE-1",
    salary:145000
}
// const myServer= http.createServer((req,resp)=>{
//     let obj=JSON.stringify(myObj)
//     resp.writeHead(200,{"Content-Type": "application/json"})
//     resp.end(obj)
//     console.log(JSON.parse(obj))
// })

const myServer=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    const readableStream= fs.createReadStream(__dirname+"/index.html")   //readstream insted of readFileSync for better performance(read in chunks rather than whole file)
    readableStream.pipe(res)  //directly piped into response
})

myServer.listen(5050,()=>{
    console.log("My Server is listening for request at Port 5050")
});            // listen function is used to listen the request on a port . It will run a callback only when server STARTS listening for request on a particular port . (ONLY ONE TIME THIS CALLBACK IS EXECUTED WHEN SERVER STARTS LISTENING REQUEST)