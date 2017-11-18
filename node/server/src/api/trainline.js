/* eslint no-use-before-define:0 */
const config = require('../config');
const fs= require('fs');

const journeyUrl = config.dataFolder + 'journey/';

const trainline = {
  api: {
    getJourney: (params) => {
      const response = JSON.parse(fs.readFileSync(journeyUrl + params.id + '.' + params.step + '.json', 'utf8'));
      return Promise.resolve(response);
    }
  }
};

function getJourney (params) {
  console.log('getting a journey...');

  return new Promise((resolve, reject) => {
    trainline.api.getJourney(params)
    .then((response) => {
      var data = response;
      console.log('...journey provided');
      resolve({
        response: data
      });
    }).catch(reject);  
  });
}

trainline.journey = (params) => {
  return new Promise((resolve, reject) => {
    getJourney(params)
      .then(resolve)
      .catch(reject);
  });
};

module.exports = trainline;