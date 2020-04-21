const fs = require("fs");
const file = "practice.txt"
let firstPart, secondPart;

firstPart = "this is the starty of the sentence.";
secondPart = "this is the second part of the sentence";
let combined = firstPart + secondPart;
letcombined2 = firstPart + "."+ secondPart+".";
let literal = `$(firstPart).$(secondPart).`
//otherwise creating the missing file .
fs.writeFileSync(file, "", "utf8");
console.log("finished creating a file");