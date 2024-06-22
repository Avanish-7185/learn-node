const fs = require("node:fs/promises");  //fs used with promises

console.log("First");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf8");  //here fs.readFile(....) is a promise
    console.log(data);
  } catch (err) { //if rejection occured by promise 
    console.log(err);
  }
}

readFile();  // this async function is called

// fs.readFile("file.txt", "utf8")         //as fs.readFile(......) is a promise we can use .then() and catch() with it
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

console.log("Second");



