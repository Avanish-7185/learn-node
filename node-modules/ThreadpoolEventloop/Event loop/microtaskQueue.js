// # Microtask Queue have 2 parts nextTick queue and promise callback queue
 
// # priority of nextTick >promise queues (callbacks of nextTick will execute first then the callbacks of promise queue)

// # All the callbacks of nextTick is executed then it will move to all callbacks of promise queue . (during exectuion=> if more callbacks are added to nextTick queue and => if nextTick queue is running then all the newly added calbacks will also be executed
//                                     else newly added queue will run only when nextTick runs in next event loop)


console.log("First");
Promise.resolve().then(()=>{// this is the prmoise callback  and will stored in Promise queue in Microtask queue as the resolve is done
    console.log("Promis callback");
});
console.log("Second");

process.nextTick(()=>{
    //this is the nextTick callback  and will stored in nextTick queue in Microtask queue after the nextick's async part is done
    console.log("nextTick Callback");
})
console.log("Third");
console.log("Fourth");
console.log("Fifth");
console.log("Sixth");
