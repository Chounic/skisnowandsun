import {listevilles} from './Codevilles';
import axios from "axios";




const YelpAPI = {

    async search(location) {



        return await axios.get("/.netlify/functions/YelpAPI", {
            params: {
              location: location
            }
          })
          .then( res => res.data)
          .then( data => data.filter( business => listevilles.includes(business.location.city)).map( business => {

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
          
          
    }

};

export default YelpAPI ;