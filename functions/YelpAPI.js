const yelp = require("yelp-fusion");

exports.handler = function(location, context, callback) {
  const { REACT_APP_YELP_API } = process.env 
  const client = yelp.client(REACT_APP_YELP_API);


  const searchRequest = {
    limit: 50, 
    term: 'hotels', 
    location: location
  };

  var fetchFromYelp = async function() {
    try {
      let res = await client.search(searchRequest);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          results: res
        })
      })


    } catch (err) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          err: err
        })
      });
    }
  };

  fetchFromYelp();
};

