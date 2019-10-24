const request = require('request');
const arg = process.argv;
const breed = arg[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
  // console.log('statusCode:', response && response.statusCode);\
  if (!error) {
    if (body.length > 3) {
      const data = JSON.parse(body);
      console.log(data[0]['description']);
      
    } else {
      console.log("Breed not found!");
    }
  } else {
    console.log('error:', error);
  }
  // console.log(typeof data);
  // console.log(typeof body);
});