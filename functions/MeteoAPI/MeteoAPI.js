const fetch = require("node-fetch");

const API_ENDPOINT = "https://api.meteo-concept.com/api/forecast/daily?token=";
const { REACT_APP_METEO_API_KEY } = process.env


exports.handler = async (event, context) => {


    const { codeville } = event.queryStringParameters;
    

  return fetch(API_ENDPOINT + REACT_APP_METEO_API_KEY + '&insee=' + codeville, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((jsonResponse) => (

    { 
      statusCode: 200,
      body: JSON.stringify(jsonResponse.forecast),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));



};