const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

const validator = require('validator');

//  create add
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Removing the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

//  create list notes
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log(`Listing all notes`),
});

//  create read note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log(`Reading single note`),
});

yargs.parse();
