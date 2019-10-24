const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode);\
    if (!error) {
      if (body.length > 3) {
        const data = JSON.parse(body);
        const desc = data[0]['description'];
        callback(null, desc);
      } else {
        let msg = "Breed not found!";
        callback(msg, null);
      }
    } else {
      callback(error, null);
    }
  // console.log(typeof data);
  // console.log(typeof body);
  });
};




module.exports = { fetchBreedDescription };