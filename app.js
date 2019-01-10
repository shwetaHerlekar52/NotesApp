console.log("HI Shweta!!");

const notes = require('./notes');
const yargs = require('yargs');
var argv = yargs.argv;
var command = argv._[0];

console.log("Command : "+command);

if (command === "add") {
    notes.addNote();
} else if (command === "read") {
    notes.readNote();
} else if (command === "remove") {
    notes.removeNote();
} else if (command === "update") {
    notes.updateNote();
}else if (command === "list") {
    notes.listNote();
}