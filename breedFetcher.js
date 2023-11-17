const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    let described = ""; // initialize global variable to return

    if (error) {
      console.log("error", error);
      return error;

    } else {

      const data = JSON.parse(body); // convert data from string into an object

      if (data.length < 1) { // if data returned an empty array, inform user of error
        described = `We have no data on ${breedName}.`;
      } else {

        const firstEntry = data[0]; // show results of the first object to the user
        described = firstEntry.description;
      }
    }

    callback(error, described);

  });
  
};

module.exports = { fetchBreedDescription };