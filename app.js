console.log("HI Shweta!!");

const notes = require('./notes');
const yargs = require('yargs');
var argv = yargs.argv;
var command = argv._[0];

console.log("Command : "+command);

if (command === "add") {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added successfully");
    } else {
        console.log("Note already taken");
    }
} else if (command === "read") {
    let note = notes.readNote(argv.title);
    if (note) {
        console.log("------");
        console.log("title :"+note.title);
        console.log("body :"+note.body);
    } else {
        console.log("Note not found");
    }
} else if (command === "remove") {
    let filteredNotes = notes.removeNote(argv.title);
    if (filteredNotes) {
        console.log("Note successfully removed");
    } else {
        console.log("Note not found");
    }
} else if (command === "list") {
    let notesList = notes.listNote();
    notesList.forEach(note => {
        console.log("------");
        console.log("title :"+note.title);
        console.log("body :"+note.body);
    });
}