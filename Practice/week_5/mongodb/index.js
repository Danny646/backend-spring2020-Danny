//String that holds the URL to contact the MongoDB server. This should be unique to your mongodb server
//When copied froma website, make sure to replace <password >. Keep Note that this will be uploaded to Github, in the future create a seperate JS file for credentials  and gitignore that
const mongoose = require("mongoose");



const dburl = mongodb+srv://"mongooseuser:<password>@cluster0-eznyr.mongodb.net/test?retryWrites=true&w=majority";

const dbsettings = {
usedNewUrlParser:true,
useFindAndModify: false


};

mongoose.connect(dbUrl,dbsettings,(error)=>{
if (error) {
    console.log("something bad happened");



}else {

console.log("Successfully connected to the database!");

}


});
//Passing a reference of the promise class to mongoose.
mongoose.promise = global.promise;
//Creating a  "innerface" to our connected database.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error:"));
let schema = mongoose.Schema;
let practiceSchema = new Schema({}){
  "time":Number,
  "title":String,
   "status":Boolean
});

let practiceModel = new mongoose.model("mymodel");



let myFirstDateToSave = new practiceModel({{
  "time":32904887290842,
  "title":"A random Line"
  "status":true,
  "notallowed":"This is not allowed"
});

console.log("Saving object to MongoDB");
//Send the obj to MongoDB to be saved.
myFirstDateToSave.save();
console.log("Saved");


let myImportantObject();