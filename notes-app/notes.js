const fs = require('fs');
const chalk = require('chalk');

// add
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken');
  }
};

// list
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue('Your notes'));
  notes.forEach((note) => console.log(note.title));
};

// load
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes-data.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// save
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes-data.json', dataJSON);
};

// remove
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed('No note found'));
  }
};

// read
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bgGreen(note.title));
    console.log(chalk.underline(note.body));
  } else {
    console.log(chalk.bgRed('No note found'));
  }
};

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote,
};
