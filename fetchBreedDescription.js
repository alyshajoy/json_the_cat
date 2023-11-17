const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return error;
    }

    const data = JSON.parse(body); // convert data from string into an object

    if (data.length < 1) { // if data returned an empty array, inform user of error
      return `We have no data on ${breedName}.`
    }

    const firstEntry = data[0]; // show results of the first object to the user
    const described = firstEntry.description;

    callback(error, described);

  });
  
};

fetchBreedDescription('Siberian', (error, description) => {
  if (error) {
    console.log("There was an error.");
  } else {
    console.log(description);
  }

});

module.exports = { fetchBreedDescription };