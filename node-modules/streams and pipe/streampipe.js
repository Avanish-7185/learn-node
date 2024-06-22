const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("./file.txt", {  //option object have what mechanism to use while reading
  encoding: "utf8",
  highWaterMark: 2,  // it tells how many bytes will be allocated to each buffer for a chunck
});  // fs.createReadStream function creates a fs.ReadStream instance . fs.ReadStream inherits the Readable class which inherits the Event class

//So a stream can emmit and listens to an event

const writeableStream = fs.createWriteStream("./file2.txt");// this is instace of fs.WriteStream class and also emits and listens the events

readableStream.pipe(writeableStream);   //pipeing is done so no need to manualy put data in writestream manually  



const gzip = zlib.createGzip();   // a transform stream is created ( used for tranformation of data into one format to another)
readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"));  //pipe chaining


// Both readStream and writeStream emits some events while initialization, running and in end
//They can be listend easily

readableStream.on("data", (chunk) => {            //while reading a chunk a data event is emited evert time by readstream so it can be listened
  console.log(chunk);
  writeableStream.write(chunk);
});

readableStream.on("end", () => {    // when reading of file is done(all chunks have been read) "end" event is emmited
  console.log("Done reading");
});

readableStream.on('close', () => {        //stream is closed automatically after end or finish event by read and write stream respectively
  console.log('Readable stream has been closed.');
});

readableStream.on("error", (err) => { // when there is error while reading an error event occurs and is been read
  console.log(err);
});

writeableStream.on('finish', () => {      // finish event occur when all data is written 
  console.log('All data has been flushed.');
});

writeableStream.on('close', () => {      //called automatcally after finish event to close the file stream
  console.log('Stream has been closed.'); 
});

writeableStream.on('error', (err) => {       //if error occur while file transfer , an error event is thrown
  console.error(`Error: ${err.message}`);
});