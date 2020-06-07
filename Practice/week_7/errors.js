var someVariable = 10;
try {
//"something bad";
console.log(nonExistingVariable);
//throw "something bad";
} catch (error) {
console.log("We tried  to acess this variable,but we couldn't so we do this instead");
console.log(error);
} finally  {
console.log("The attempt to read a variable is done!");
}

//We can throw custom errors in our code for specific purposes.
throw new Error();