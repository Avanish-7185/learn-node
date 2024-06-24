//timer queue runs after micro task queue ( All callback in microtask queue is executed then timer queue is executed)

// After every call back executed in timer queue => node checks for any calbacks in microtask queue to ensure to run it first the continue execution

setTimeout(() => {
    console.log("1");
}, 0);
setTimeout(() => {
    console.log("2");
    process.nextTick(() => {
        console.log("nextTick queue in set timeout");  // this will execute then the next timer queue function is executed
    })
}, 0);
setTimeout(() => {
    console.log("3");
}, 0);


// functions are queued in the time queue based on the time length that too in ascending order ( queue wors on FIFO so least time function is First entered and then executed)

setTimeout(() => {
    console.log("one");
}, 1000);
setTimeout(() => {
    console.log("two");

}, 500);
setTimeout(() => {
    console.log("three");

}, 100);