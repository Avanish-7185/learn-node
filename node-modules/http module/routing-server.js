const http = require('http');

const server = http.createServer((req, res) => {

    // req.method==="GET"        //this is for conditional routing when method is POST then post something, method is DELETE the delete something



    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("About Page")
    }
    else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({
            type: "Http",
            status: "200 OK",
            owner_name: "Avanish Shukla"
        }))
    }
    else {
        res.writeHead(404)
        res.end("Page not found")

    }
}
)

server.listen(8080,()=>{
    console.log("Server at 8080");
})