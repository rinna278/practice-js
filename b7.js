const axios = require('axios');

const urls = [
    'https://api.github.com/users/ptit9x',
    'https://api.github.com/users/google'
];

Promise.all(urls.map(url => axios.get(url)))
  .then(ress => {
    ress.forEach((res, index) => {
      console.log(`API ${index + 1}:`, res.data);
    });
  })
  .catch(error => {
    console.error('Error: ', error);
  });