const request = require("request");
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.log("Oops! Something isn't working.");
    return;
  }

  const data = JSON.parse(body); // convert data from string into an object

  if (data.length < 1) { // if data returned an empty array, inform user of error
    console.log(`We have no data on ${breedName}.`);
    return;
  }

  const firstEntry = data[0]; // show results of the first object to the user
  console.log("firstEntry:", firstEntry);

});