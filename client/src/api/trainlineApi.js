import fetch from 'isomorphic-fetch';

class TrainlineApi {
  static getJourney(id, step) {

    return fetch('http://localhost:81/api/trainline/journey' +
    '?id=' + id +
    '&step=' + step)
      .then(response => response.json())
      .catch(error => {
        return error;
    });
  }
}

export default TrainlineApi;