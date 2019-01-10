console.log("Inside notes");
var exports = module.exports = {}
const fs = require('fs');

var writeNote = (note) => {
    fs.writeFileSync("mynotes.json", JSON.stringify(note));
}

var fetchNotes = () => {
   try {
    let notesString = fs.readFileSync("mynotes.json");
    let notes = JSON.parse(notesString);
    return notes;
   } catch { return []; }
}

exports.addNote = (title, body) => {
    let duplicateNotes = [];
    let currentNote = {
        "title" : title,
        "body" : body
    }
    notes = fetchNotes();
    duplicateNotes = notes.filter((note) => {
        return note.title === title
    });  
    if (duplicateNotes.length === 0){
        notes.push(currentNote);
        writeNote(notes);
        return currentNote;
    }
}

exports.readNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

exports.removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    if (filteredNotes.length < notes.length) {
        writeNote(filteredNotes);
        return filteredNotes;
    }
}

exports.listNote = () => {
    return fetchNotes();
}

exports.updateNote = () => {
    console.log("Note updated");
}