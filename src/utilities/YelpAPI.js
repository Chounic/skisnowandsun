import {listevilles} from './Codevilles';
import axios from "axios";




const YelpAPI = {

    async search(location) {

        console.log('netlify');

        return await axios.get("/.netlify/functions/test", {
            params: {
              location: location
            }
          })
          .then( res =>  
            /*res = JSON.parse(res.data.results.body);
            const results = this.geojsonify(res.businesses);
            this.yelpData = results;*/
            res.data
          ).then( data => data.filter( business => listevilles.includes(business.location.city)).map( business => {

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
        
    }));
          
          /*
        if (businesses){

            businesses.filter( business => listevilles.includes(business.location.city)).map( business => {

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
            
        }.then( response => response.json()).then(jsonResponse => {
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
        });*/
    }

};

export default YelpAPI ;