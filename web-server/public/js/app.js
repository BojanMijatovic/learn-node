const weatherForm = document.querySelector('form');
const messageOne = document.querySelector('.message-one');
const messageTwo = document.querySelector('.message-two');
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = document.querySelector('#location').value;

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    messageOne.textContent = 'Loading...';

    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = '';
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });

  document.querySelector('#location').value = '';
});
