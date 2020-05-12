const fs = require("fs");
const file = "practice.txt";
const text = "This is added every time files.js runs!";
//Check if the file exists
if (fs.existSync (file)) {
 console.log (`file "+file +"was found!`);
 let data = fs.readFileSync(file, "utf8");
 console.log("The contents of the file are:" +data);
}else{ 
    console.log("file'" + file" '+ was not found"");   
console.log("creating file with the name'" +file="'");
}
//Showing what we are adding and to what file throught the terminal. 
//Adding what text is holding, to the end of the file
console.log (`added to '${text} to the file`${file},``);

//otherwise creating the missing file .
fs.writeFileSync(file, "", "utf8");
console.log("finished creating a file");
console.log(`creating file with the same `${file}``);