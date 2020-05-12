//Topics used in this file are: FS package, JSON, Javascript
const fs = require("fs");

let persistenceObject = null;
let doesFileExist = fs.existenceSync("persistentbject.json");
if (doesFileExist) {
  let filename = "persistentObject.json";   
let existingJSON = fs.readFileSync("persistentobject.json")
console.log(`Read file: ${existingJSON}`);
}
