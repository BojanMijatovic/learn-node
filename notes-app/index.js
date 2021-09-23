const yargs = require('yargs');
const notes = require('./notes.js');

//    add notes
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

//   remove notes
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

//    list notes
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    title: {
      describe: 'Listing all notes',
      demandOption: false,
      type: 'string',
    },
  },
  handler: () => notes.listNotes(),
});

//    read note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Reading a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

yargs.parse();
