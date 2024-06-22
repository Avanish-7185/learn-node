const crypto = require("crypto");
const https = require("https");

process.env.UV_THREADPOOL_SIZE = 4;  //default threadpool size is 4 and can be increase based of no of cores in system
// if size> cores the cores will be internally divided so each thread gets equal amount of resource

const start = Date.now();

const MAX_CALLS = 4;

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {       //this task require CPU thread pool
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });

//   https
//     .request("https://www.google.com", (res) => {         //this task require OS kernel (Native Asynch I/O) to run asynchronously
//       res.on("data", () => {});
//       res.on("end", () => {
//         console.log(`Request: ${i + 1}`, Date.now() - start);
//       });
//     })
//     .end();
}