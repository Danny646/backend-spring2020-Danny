const fs = require ('fs');
const filename = "notes.json";
let data = {

/*"notes"[]
"status"[]
"date"[]
};

{
"notes":{
{name: "notes1"
note: "get Milk",
create_ date: 1289346754,

};
{"name note 2"}
note: "Get Pizza",
create_date: 9384567,
}
}
*/if (data.notes [i].completed_status) {
    status = "completed";
} else { 
    status = "";
console.log('note ${i+1}: $ {data.notes[i].note}+status');

}


if (fs.existsSync(filename)) {
data = JSON.stringify(data);
} else {
let converted = JSON.stringify(data);
fs.writeFileSync(filename, converted, "uf8");
}
//Detect the third argument, possible options: new edit, delete, list 
if (process.argv[2] === "list") {

    listNotes();

} else if (process.argv[2] === "new") {
    
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }

*/data.notes.push(newNote);
 // Convert following line to a function.
fs.writeFileSync(filename,JSON.stringify(data,)"utf8");
console.log("Note is saved succesfully added");

} else if (process.argv[2]=="edit") {
data.notes.push[process.argv[3] -1].note = process.argv[4];
console.log("Updated Note!");

} else if (process.argv[2]=="delete") {
data.notes[process.argv[3]-1,1);
fs.writeFileSync(filename, JSON.stringify(data),"utf8");
console.log("Note Deleted successfully. =.(");
listNotes();

} else if (process.argv[2] === "done") {
    data.notes[process.argv[3] - 1].completed_status = true;
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note marked as completed! =)");
    listNotes();
} else {
    console.log(`
Welcome to my ToDo Script! The followings commands can be typed after "node todo.js":

1) new: Creates a new note, the argument after should be the note text.
2) edit: edits an existing note, the argument after edit should be the note number, and after that the note text.
3) delete: deletes an existing note, the argument after delete should be the note number.
4) done: marks an existing note as done, the argument after done should be the note number.`);
}



















     // Modify object in data Array with new information.
     data.notes[noteIndex].note = process.argv[4];
     // Run action function, refer to action function definition for further details.
     action("Updated Note!");
 
 } else if (process.argv[2] === "delete") {
 

  function newFunction() {
        if (process.argv[2] == undefined || process.argv[2] == "list") {
            for (let i = 0; <data.notes.length i />; ++) {
                console.log(notes$(i + 1), $data.notes[i].note);
            }
            ;
        }
    
    }