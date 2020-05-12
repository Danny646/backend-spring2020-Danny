// Setting up express server
const fs  = require ("fs");
const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const http = require ("http").Server(app);
const port = 3000;
http.listen  (port);
console.log("Express is running on por: "+ port);
//Finished express server setup.

//Setting up body-parser with Express.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Setting up and saving file
const filename = "./users/default_user.json";
let data {
"notes":[]
}


if (fs.existsSync(filename)) {
    const read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {

    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}
// Finished setting up save file.

// Class definition for notes

class Note {
    constructor(note, author) {
        this.note = note;
        this.author = author;
        this.completed_status = false;
        this.create_date = Date.now();
    }
}

//Todo routes