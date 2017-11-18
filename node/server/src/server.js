require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Trainline! The API is listening');
});

app.get('/api/trainline/journey', (req, res) => {

  api.trainline.journey({
      id: req.query.id,
      step: req.query.step
  })
  .then((results) => {

    /* Nest the calling points inside the journey */
    let journey = results.response.journey;
    journey.callingPoints = results.response.callingPoints;

    res.json(journey);
  })
  .catch(console.error);
});

app.listen(81, () => {
  console.log('Node server listening on http://localhost:81');
});
