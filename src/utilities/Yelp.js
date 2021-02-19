/*import {listevilles} from './Codevilles';

const apiKey = 'D5lAYwNCKx4IU2hzZ4v4Wk3BpcOObUUMEgsQPvrS0D4oY87bybWTUPCpbO2XXfk5t2hWbEkzFqQuGHfRzsEA1Cnpbm6o4Yz3D9Uda5TmeOH3L_Smqnnh5f49vwSSX3Yx';
const Yelp = {

    search(location){
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50&term=hotels&location=' + location, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                mode: "no-cors",
            },
            
        } ).then( response => response.json()).then(jsonResponse => {
            console.log(jsonResponse.total);
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
    }

};

export default Yelp ;*/

import {listevilles} from './Codevilles';


const Yelp = {

    search(location){
        return fetch("/.netlify/functions/YelpAPI").then( response => response.json()).then(jsonResponse => {
            console.log(jsonResponse.total);
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
    }

};

export default Yelp ;
