const axios = require('axios');

//promise 
axios.get('https://api.github.com/users/ptit9x')
  .then(res => {
    console.log('User data using Promise:', res.data);
  })
  .catch(err => {
    console.error('Error fetching user data:', err);
  });

//async await
async function fetchUserData() {
  try {
    const res = await axios.get('https://api.github.com/users/ptit9x');
    console.log('User data using async/await:', res.data);
  } catch (err) {
    console.error('Error fetching user data:', err);
  }
}

fetchUserData();