// micro task queue is executed first=>time queue is executed=>micro task queue is checked for callbacks=>file i/o queue is executed=> micro task queue is checked................ 

// prioriy 1)microtask 2)time 3)file i/o ........
 const fs = require("node:fs")

Promise.resolve().then(()=>{
    console.log("promis callback");
})

fs.readFile(__filename,()=>{
    console.log("File i/o callback");
})

process.nextTick(()=>{
    console.log("nextTick callback");

})

setTimeout(() => {
    console.log("time queue");
}, 0);              // by default 0 ms is set to 1ms in JS so....... if event loop enters the event loop before this timer then it will se the callabck in next iteeration when the time has been comleted, else it will encounter the time callback in the first iteration


for(let i=0;i<300000;i++){}