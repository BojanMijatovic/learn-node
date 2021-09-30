const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1451d47091e8fc6eda2cc93bd8088648&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `Weather now is ${body.current.weather_descriptions[0]} and currently is ${body.current.temperature} , and it feel like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
