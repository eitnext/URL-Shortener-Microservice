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
app.use(bodyparser.urlencoded({extended: false}))

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// create random
// app.use((req, res, next) =>  {
//   const nb = Math.round(Math.random() * 100);
//   const { original_url } = req.query;
 

//   req.original_url = original_url;
//   req.nb = nb;
//   next();
// })

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
