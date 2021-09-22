const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
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

const getNotes = () => `Some your notes ...`;

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes-data.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes-data.json', dataJSON);
};

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

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  removeNote: removeNote,
};
