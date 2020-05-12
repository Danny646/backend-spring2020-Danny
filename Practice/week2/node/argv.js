//Exploring "process argv";
//Holds an array nwith all the parts of that we typen in the terminal 
console.log(`The array held  by "Process. argv" currently holds:` );
console.log(process.argv);

console.log(`Our first  custom bash argument is:${process.argv[2]}`);