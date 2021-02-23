const fetch = require("node-fetch");


const API_ENDPOINT = "https://api.yelp.com/v3/businesses/search?limit=50&term=hotels&location=";
const { REACT_APP_YELP_API_KEY } = process.env


exports.handler = async (event, context) => {


    const { location } = event.queryStringParameters;
    console.log(location);

  return fetch(encodeURI(API_ENDPOINT + location), { headers: { Accept: "application/json", Authorization: `Bearer ${REACT_APP_YELP_API_KEY}`} })
    .then((response) => response.json())
    .then((jsonResponse) => (

    { 
      statusCode: 200,
      body: JSON.stringify(jsonResponse.businesses),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));



};