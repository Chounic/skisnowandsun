import fetch from 'node-fetch';

const yelpApiRootUrl = 'https://api.yelp.com/v3/businesses/search?limit=50&term=hotels&location='
const yelpApiKey = process.env.YELP_API_KEY;

exports.handler = async (event) => {
  // We can retrive type of http method in event parameter
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
    const response = await fetch(`${yelpApiRootUrl}/movie/latest?api_key=${movieDbApiKey}`, { 'content-type': 'application/json' })  
    const movieData = await response.text();

    return { statusCode: 200, body: movieData };
  }
  
  return { statusCode: 404 };
}