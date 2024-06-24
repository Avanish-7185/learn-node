// check queue is executed after the microtask->timer queue->i/o queue->check queue

// Know about I/O Polling which cause small issue between exectuion of check queue before I/o queue sometimes


setImmediate(()=>{console.log("This is a check queue by setImmidiate function");})