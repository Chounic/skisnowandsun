const yelp = require("yelp-fusion");
const fetch = require("node-fetch");


  exports.handler = async () => {
      const response = await fetch("https://icanhazdadjoke.com/")
      .then(res => res.json())
      .catch(err => console.error(err));
  
    return {
      /*statusCode: 200,
      body: JSON.stringify(response)*/
      statusCode: 200, 
      azz: "sisi", 
      tyu: "mama"
    };
  };
