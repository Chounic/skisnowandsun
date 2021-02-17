const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000, 
  cors = require("cors"), 
  fetch = require("node-fetch");

app.use(cors());



const apiKey = 'D5lAYwNCKx4IU2hzZ4v4Wk3BpcOObUUMEgsQPvrS0D4oY87bybWTUPCpbO2XXfk5t2hWbEkzFqQuGHfRzsEA1Cnpbm6o4Yz3D9Uda5TmeOH3L_Smqnnh5f49vwSSX3Yx';
const url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50&term=hotels&location=' ;

function search(){

    return fetch('https://api.yelp.com/v3/businesses/search?limit=50&term=hotels&location=Savoie', {
      headers: {
          Authorization: `Bearer ${apiKey}`
      },
      
  }).then( response => response.json()).then( data => console.log(data)).catch((err) => console.log(err));

};
  
search();






app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});


app.listen(port, () => console.log("Backend server live on " + port));