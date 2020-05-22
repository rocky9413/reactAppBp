const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const apiRouter = require('./routes/api');

const { URI } = require('./models/PokemonModel'); // db URI

// connect to MongoDb
mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve the bundle.js as a static file
app.use(express.static(path.resolve(__dirname, '../dist')));

// serving index.html // setting header | status | file
app.get('/', (req, res) => {
  res
    .set({ 'Content-Type': 'text/html', charset: 'UTF-8' })
    .status(200)
    .sendFile(path.resolve(__dirname, '../src/index.html'));
});

// serving apiRouter
app.use('/api', apiRouter);

// // Handle CSR catch all
// app.get('/*', (req, res) => {
//   res
//     .set({ 'Content-Type': 'text/html', charset: 'UTF-8' })
//     .status(200)
//     .sendFile(path.resolve(__dirname, '../src/index.html'));
// });

// // catch-all route handler for any requests to an unknown route
// // eslint-disable-next-line no-unused-vars
// app.use('/*', (req, res, next) => {
//   res.status(404).send();
// });

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, { ...err });
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message.err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server listen on port ${PORT}`));

module.exports = app;
