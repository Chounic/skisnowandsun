const apiKey = 'b699b12bc58b20d17a113c3df1a7184a73293b81dd94ff1f22df6874ae1f68d9';
const MeteoConcept = {

    meteo(codeville){
        return fetch('https://api.meteo-concept.com/api/forecast/daily?token=' + apiKey + '&insee=' + codeville, {
            headers: {
                mode: "no-cors",
            },
        }).then( response => response.json()).then( jsonResponse => {
            if (jsonResponse.forecast){

            return jsonResponse.forecast.map( day => {
                return {
                    weather: day.weather,
                    day: day.day
                }
            })




            }}
            )




    }


};

export default MeteoConcept ;