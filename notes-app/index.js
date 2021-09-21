const chalk = require('chalk');
const yargs = require('yargs');

const validator = require('validator');
const getNotes = require('./notes.js');

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
  handler: (argv) => console.log(`Note Title:${argv.title} \nBody:${argv.body}`),
});

// create remove
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log(`Removing note`),
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
