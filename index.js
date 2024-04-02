require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const shortRoutes = require('./routes/shortRoutes');
const bodyparser = require('body-parser');
const app = express();

//LOGGING
app.use(morgan('dev'));

// body parser
app.use(express.json());


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// ROUTES
app.use('/api', shortRoutes);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
