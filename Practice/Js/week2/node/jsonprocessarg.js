const fs = require("fs");
//Json:  javaScript Object notation before Json we had XMl
let object = {
"myName": "Dan",
"myJob": "sleep",
"favFood": "burrito"
};
//let converted = myObject.toString();
//console.log(converted);
//Converts a javascript object to a string  in the form of JSON.
JSON.stringify();
console.log(converted);
let convered = myObject.toStringify();
//console.log(typeof converted);
console.log("Saving an object to a file");
fs.writerFileSync("saveData.json",converted,"utf8");
console.log("finished.");
