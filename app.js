console.log("HI Shweta!!");

const notes = require('./notes');
const yargs = require('yargs');

var titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
}

var bodyOptions = {
    describe : 'Body of note',
    demand : true,
    alias : 'b'
}

var argv = yargs
    .command('add', "Add a note",{
        title : titleOptions,
        body : bodyOptions 
    })
    .command('read', "Read a note",{
        title : titleOptions
    })
    .command('list', "List notes")
    .command('remove', "Remove a note",{
        title : titleOptions
    })
    .help()
    .argv;
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
       notes.logNote(note);
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
        notes.logNote(note);
    });
}