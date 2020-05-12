//Convert the following object into JSON and save that JSON file inside of the HW folder of the repository 
let objectToSave = {
 key1:"some key",
 isTrue:false,
 someFunction: function () {console.log("hello");},   
totalAmount:100900
};
console.log(converted);
//Converted to JSON file
let converted = JSON.stringify(objectToSave);
fs. writeFileSync("savedChallenge.json",converted, "utf8");

//Read JSON and convert  to JS object
let data = fs.readFilesync("savedChallenged.json", "utf8");
let readObject = JSON.pasel(data);
console.log(readObject.totalAmount, typeof readObject.totalAmount);
