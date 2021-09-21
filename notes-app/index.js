const chalk = require('chalk');
const validator = require('validator');

// const add = require('./utils.js');
// const sum = add(1, 2);
// console.log(sum);

const mail = 'dasdat@gmail.com';

const getNotes = require('./notes.js');
const notes = getNotes();
console.log(notes);

// const isEmail = validator.isEmail(mail);
// console.log(isEmail);

console.log(chalk.bgBlue.whiteBright('Hello world!'));
console.log(chalk.dim.underline.magentaBright('Success!'));
