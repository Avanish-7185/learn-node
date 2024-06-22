const buf = Buffer.alloc(10); // Creates a buffer of size 10 bytes  which is fixed
console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>  0000000000 initially

buf.write('abc'); // Writes 'abc' to the buffer.   abc0000000
console.log(buf); // <Buffer 61 62 63 00 00 00 00 00 00 00>

buf.write('xyz', 1); // Writes 'xyz' starting from position 1. axyz000000
console.log(buf); // <Buffer 61 78 79 7a 00 00 00 00 00 00>




const buffer = new Buffer.from("Vishwas", "utf-8"); //utf-8 is default  //size is string length
buffer.write("Codevolution");

console.log(buffer);
console.log(buffer.toString());   // toString or toJSON are built in js functions
console.log(buffer.toJSON());