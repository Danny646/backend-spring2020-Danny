const fs = require("fs");
//Json:  javaScript Object notation before Json we had XMl
let myObject = {
"myName": "Dan",
"myJob": "sleep",
"favFood": {
 food1:"burrito"
food2: "pizza",
food3: "sushi"
},
};
//let converted = myObject.toString();
//console.log(converted);
//Converts a javascript object to a string  in the form of JSON.
//myObject.myFunction();
JSON.stringify();
console.log(converted);
let convered = myObject.toStringify();
//console.log(typeof converted);
console.log("Saving an object to a file");
fs.writerFileSync("saveData.json",converted,"utf8");
console.log("finished.");
let converted = JSON.stringify (myObject);
let contents = fs.readFileSync("saedData.JSON", "utf8")

let anObjectAgain = JSON.parse (contents);
console.log(anObjectAgain);