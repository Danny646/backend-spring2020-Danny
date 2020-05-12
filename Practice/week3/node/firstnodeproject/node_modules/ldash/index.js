//Npm install -g package-name 
//This installs the package globally, meaning to your computer , so that anyother project can use it.Downside: it is only on your computer and not "required" by your package.

//npm install  -Spackage name. This insalls the  package just for  the node project you are in.  This will also modify your package.json to say that it is required for the project to work. It is installed on the node project folder.

const fs = require("fs");
const lodash = require ("lodash");
console.log(lodash.random(1,10));
console.log(math.random()*10)+1)