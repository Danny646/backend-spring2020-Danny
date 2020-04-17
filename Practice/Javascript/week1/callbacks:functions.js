//Callback and functions 
//Defining a function 
function coolFunction() {
  let text = "Hello There";  
//line 6 everything here is destroyed

}
//Calling a funcxtion a number of times 
coolFunction();
coolFunction();
coolFunction();
coolFunction();
coolFunction();
coolFunction();

//Return keyword 
anotherFunction() {
let text = "Some other text";
let otherTextSurvive = "very important!";
return text;
}

let results = anotherFunction() + anotherFunction();
console.log(results);

function functionName() {
let text = "Hi everyone!";

}