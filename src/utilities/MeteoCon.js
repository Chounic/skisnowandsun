import axios from "axios";


const MeteoConcept = {

    async meteo(codeville){


        return await axios.get('/.netlify/functions/MeteoAPI', {
            params: {
                codeville: codeville
            }
        })
        .then( res => res.data)
        .then( data => data.map( day => {
                return {
                    weather: day.weather,
                    day: day.day
                }
        }));

    }

};

export default MeteoConcept ;