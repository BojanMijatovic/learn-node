const https = require('https');

const url = `http://api.weatherstack.com/current?access_key=1451d47091e8fc6eda2cc93bd8088648&query=40,-44&units=m`;

const request = https.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

console.log('Sending request...');
request.end();
