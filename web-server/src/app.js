const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//  set up static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather from HBS',
    name: 'HBS',
    author: 'Alex Read',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'HBS',
    author: 'Alex Read',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'HBS',
    author: 'Alex Read',
  });
});

app.get('/weather', (req, res) => res.send({ temp: 30, location: 'London', forecast: 'sunny' }));

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 error',
    message: 'Help article not found',
    author: 'Alex Read',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 error',
    message: 'Page not found',
    author: 'Alex Read',
  });
});

// set up port
app.listen(3000, () => console.log(`Example app listening on port!`));
