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
      }).then(jsonResponse => {

        if (jsonResponse.businesses){

            return jsonResponse.businesses.filter( business => listevilles.includes(business.location.city)).map( business => {
    
                    return {
                        id: business.id ,
                        imageSrc: business.image_url ,
                        name: business.name ,
                        address: business.location.address1 ,
                        city: business.location.city ,
                        state: business.location.state ,
                        zipCode: business.location.zip_code ,
                        category: business.categories[0].title ,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        price: business.price,
                        phone: business.phone,
                        score: 0
                    }
                
                })
            }



      });

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

