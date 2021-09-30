const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  res.send({
    products: [],
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({ error: 'add real address' });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

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
