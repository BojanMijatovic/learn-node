const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');

const publicHelpPage = path.join(__dirname, '../public/help.html');
const publicAboutPage = path.join(__dirname, '../public/about.html');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather from HBS',
    name: 'HBS',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'HBS',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'HBS',
  });
});

// app.get('/help', (req, res) => {
//   res.sendFile(publicHelpPage);
// });

// app.get('/about', (req, res) => {
//   res.sendFile(publicAboutPage);
// });

app.get('/weather', (req, res) => res.send({ temp: 30, location: 'London', forecast: 'sunny' }));

app.listen(3000, () => console.log(`Example app listening on port!`));
