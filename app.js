const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const form = require('./routes/form');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/api/form', form);

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

module.exports = app;
