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
let text =105;
let text = "Some other text";
let otherTextSurvive = "very important!";
return [otherTextToSurvive, text, number];
}

let myArray = anotherFunction();

let results = ( 10 * myArray[2] ) + 100;

console.log(results);
//NaN
//undefined
//null
//0
//""
//false


// parameters and arguments

// Paremeters are only defined in the paranthesis of the FUNCTION DEFINITION.
function argumentPractice(shouldIRun) {

    if (shouldIRun === 10) {
        console.log("This function ran.");
    }

}
argumentPractice();
let results = anotherFunction() + anotherFunction();
console.log(results);

function functionName() {
let text = "Hi everyone!";

}