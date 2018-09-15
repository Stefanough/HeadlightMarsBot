const request = require('request');
const http = require('http');

// request.post({ url: 'https://headlight-tournament-2.herokuapp.com/register', form: '"callsign": "XelpmisFree"' }, (err, res, body) => {
//   if (err) {
//     console.log('ERROR: ', err);
//   } else {
//     console.log('body: ', body);
//   }
// });

function SendPOSTRequest(path, data, callback) {
  const options = {
    hostname: 'headlight-tournament-3.herokuapp.com',
    port: 80,
    path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = [];

  const req = http.request(options, (res) => {
    res.on('data', (chunk) => { response.push(chunk); });
    res.on('end', () => {
      const finalResponse = JSON.parse(response.join(''));
      callback(finalResponse);
    });
  });

  req.write(JSON.stringify(data));
  req.end();
}

// Sample request

const data = {
  callsign: 'XelpmisFree',
};

const cb = function (response) {
  console.log('Here is my response: ', response);
};

SendPOSTRequest('/register', data, cb);