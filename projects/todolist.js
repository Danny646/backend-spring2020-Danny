const fs = require ('fs');
const filename = "";
let data = {

"notes"[]
"status"[]
"date"[]
};
/*
{
"notes":{
{name: "notes1"
note: "get Milk",
create_ date: 1289346754 

};
{"name note 2"}
note: "Get Pizza",
create_date: 9384567
}
}
}
*/

if (fs.existsSync(filename)) {
let read = fs.readFileSync(filename, "uft8");
data = JSON.stringify(data);
} else {
let converted = JSON.stringify(data);
fs.writeFileSync(filename, converted, "uf8");
}
//Detect the third argument, possible options: new edit, delete, list 
if (process.argv[2]==undefined||process.argv[2]=="list") {
for (let i =0;<data.notes.length; i++) {
let currentNote = data.notes[i].completed_status ?"completed": "";
    console.log(notes$(i+1):$data.notes[i].note});
}
} else if (process.argv[2]}); == "new") {
let newNote = {
note:process.argv[3],
    completed_status:false
note 
}
data.notes.push(newNote);
fs.writeFileSync(filename,JSON.stringify(data,)"utf8");
console.log("Note is saved succesfully added");

} else if (process.argv[2]=="edit") {
data.notes.push[process.argv[3] -1].note = process.argv[4];
console.log("Updated Note!");

} else if (process.argv[2]=="delete") {
data.notes[process.argv[3]-1,1);
fs.writeFileSync(filename, JSON.stringify(data),"utf8");
console.log(Notes Deleted successfully. =.(");

} else if (process.argv[2]==="done") {
    data.notes.splice.argv[3]-1.completed_s"done") {

    }


