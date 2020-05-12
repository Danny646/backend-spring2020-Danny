
const fs = require ("fs");
let persistentObject = null;

let filename = "persistentObject.json";

//Check if file exists or not 
let doesFileExist = fs.existence (filename);

//If file exists
if (doesFileExists) {

// Read it....
let existingJSON = fs.readFileSync (filename);
console.log (`object converted from JSON:`);
}else {
console.log("File does not exist, creating new file");
fs.writeFileSync(filename,`{"numberList":[]}`,"utf8");
persistentObject = {numberList:[]};


persistentObject.numberList:.push(process.argv[2]};

} fs.writeFileSync(filename, persistentObject, "utf8");
console.log(persistentObject);


