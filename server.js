'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const exampleRoutes = require('./routes/example');
const detailsRoutes = require('./routes/details');

// mongoose.connect(`mongodb+srv://ferrilata:${process.env.MONGO_PASS}@ferrilata-jade-reddit-lrtmg.mongodb.net/FedExDB?retryWrites=true&w=majority`, {useNewUrlParser: true})
//   .then(() => {
//     console.log('Connection established to DB');
//   })
//   .catch(() => {
//     console.log('Connection failed!');
//   });

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  next();
});

app.use(express.json());

// ROUTES
app.use('/example', exampleRoutes);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/details', detailsRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
