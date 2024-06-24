// close queue is executed after the microtask->timer queue->i/o queue->check queue->close queue



const fs = require("node:fs");

const a=fs.createReadStream(__filename);


setTimeout(()=>{console.log("this is set timeout");},0)
setImmediate(()=>{console.log("This is a check queue by setImmidiate function");})
a.close()
a.on("close",()=>{console.log("this is a close queue executed when file is closed and close event is emmited");})  // close queue after all queue