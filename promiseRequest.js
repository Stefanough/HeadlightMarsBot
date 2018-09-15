const request = require('request');

const url = 'https://headlight-tournament-2.herokuapp.com';

const data = {
  callsign: 'XelpmisFree',
};

const promiseRequest = endPoint => new Promise((resolve, reject) => {
  request.post({ url: `${url}${endPoint}`, form: JSON.stringify(data) }, (err, res, body) => {
    if (err) {
      console.log('Error: ', err);
      reject(err);
    }
    resolve(JSON.parse(body));
  });
});

module.exports = { promiseRequest };
