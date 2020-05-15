const mongoose =  require('mongoose');
const dburl="mongodb+srv://databasepasswpord:UWmEVvXI8WzIF5yC@cluster0-eznyr.mongodb.net/todo_Script?retryWrites=true&w=majority";
const dbOptions = {
  usedNewURLParser:true,
  useFindAndModify:false,
  useUnifiedTopology:true   
}
mongoose.connect(dbURL,dbOptions,(error)=> {


    if (error) {
        console.log("Mongoose recived an error!", error);
    } else {
        console.log("Sucessfully connected to MongoDB");
    }
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error",console.error.bind(console, "MongoDB Error:"));
let Schema = mongoose.Schema;
let noteSchema = new Schema ({
    note: string,
    completed_status: boolean 
});
let noteModel = new mongoose.model("notes", noteSchema);
//Finished setting up MongoDB/mongopose
 (process.argv[2]==="list") 
  if (process.argv[3]==="new" {  
    listNotes();
  
}else if (process.argv[2]===undefined) {
    console.log("Error: no text for note");
    return;
}

let neNote = {
note:process.argv[3],
completed_status: false;
};

newNote = new noteModel(newNote);

newNote.save((error) => {
    
return;
} else if (process.argv[2]==="edit") {


}   

let noteIndex = checkIndex(process.argv[3]);
if (process.argv[4]===undefined) {
    console.log("no text for note");
    return;
}

DataCue.notes [notesIndex].note = process.argv[4];
action ("updated note");
} else if (process.argv[2]==="delete");
let noteIndex = checkIndex(process.argv[3]);
DataCue.notes.splice(noteIndex,1);