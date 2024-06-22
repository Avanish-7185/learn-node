const path = require("node:path");   //node:path means that path is internal node module


console.log(__filename);  //absolute file location
console.log(__dirname);   // absoluter directory location


console.log(path.basename(__filename));  //only filename from the absolute path
console.log(path.basename(__dirname));  //only Directory name from the absolute path

console.log(path.extname(__filename));  // extention like .exe .js .cpp .jsx
console.log(path.extname(__dirname));      // repo dont have any extention 

console.log(path.parse(__filename));        //objectifing the absolute path into objects root=>dir=>base(file name)=>ext=>name
console.log(path.format(path.parse(__filename)));  // deobjetifing the parsed path into absolute path

console.log(path.isAbsolute(__filename));           //boolean value true
console.log(path.isAbsolute("./data.json"));          //false



//JOIN will use the provided string to create a new path location
console.log(path.join("folder1", "folder2", "index.html")); // will join the stribngs to form the path (absolute or relative any based on context)
console.log(path.join(__dirname, "data.json")); 
console.log(path.join("/folder1", "folder2", "index.html")); // having / makes the joined path absolute
console.log(path.join("/folder1", "//folder2", "index.html"));  // having // after absolute string wont effect the path
console.log(path.join("/folder1", "//folder2", "../index.html"));  // folder1=>|_folder2
                                                                    //         |_index.html


//RESOLVE will use the provided string to create a new path location=>followed by the absolute path in which it is bieng called.
console.log(path.resolve("folder1", "folder2", "index.html")); 

console.log(path.resolve("/folder1", "folder2", "index.html")); // having / will create abbsolute path but from the root directory(C:\folder1\folder2\index.html)

console.log(path.resolve("/folder1", "//folder2", "index.html")); // haviing // is nothing but a new / which makes the absolute path begin from there by ignoring old declared absolute path. (C:\folder2\index.html)

console.log(path.resolve("/folder1", "//folder2", "../index.html")); //C:\index.html

console.log(path.resolve(__dirname, "data.json"));