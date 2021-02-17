import React from 'react';
import Prevision from '../Prevision/Prevision';
import './ListePrevisions.css';
import sunny from './sunny.png';
import partlycloudy from './partlycloudy.png';
import cloudy from './cloudy.png';
import verycloudy from './verycloudy.png';
import snowy from './snowy.png';
import verysnowy from './verysnowy.png';
import rainy from './rainy.png';
import storm from './storm.png';


class ListePrevisions extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            /*weatherScore: [] ,*/
        };

    }

    componentDidMount() {


      
        this.props.loading(true);
  
  
      }


    render() {


        return (

            <div className="ListePrevisions">

                {
                this.props.previsions.filter( prevision => prevision.day < 7 ).map( prevision => {

        
                return <div className="Prevision" key={prevision.day}>
                    
                            <p>{prevision.day === 0 ? 'Now' : `J+${prevision.day}`}</p>
                            <div>
                                {prevision.weather === 0 && <img src={sunny} alt='' />}
                                {prevision.weather === 1 && <img src={partlycloudy} alt='' />}
                                {(prevision.weather > 1 && prevision.weather < 4) && <img src={cloudy} alt='' />}
                                {(prevision.weather > 3 && prevision.weather < 6) && <img src={verycloudy} alt='' />}

                                {(prevision.weather > 16 && prevision.weather < 22) && <img src={snowy} alt='' />}
                                { (prevision.weather > 59 && prevision.weather < 62 ) && <img src={snowy} alt='' /> }
                                { (prevision.weather > 62 && prevision.weather < 65 ) && <img src={snowy} alt='' /> }
                                { (prevision.weather > 65 && prevision.weather < 68 ) && <img src={snowy} alt='' /> }
                                
                                {(prevision.weather >= 100 && prevision.weather < 200) && <img src={storm} alt='' />}

                                {prevision.weather === 22 && <img src={verysnowy} alt='' />}
                                {prevision.weather === 62 && <img src={verysnowy} alt='' />}
                                {prevision.weather === 65 && <img src={verysnowy} alt='' />}
                                {prevision.weather === 68 && <img src={verysnowy} alt='' />}
                                {prevision.weather === 222 && <img src={verysnowy} alt='' />}

                                { (prevision.weather > 5 && prevision.weather < 20 ) && <img src={rainy} alt='' /> }
                                { (prevision.weather > 22 && prevision.weather < 60 ) && <img src={rainy} alt='' /> }
                                { (prevision.weather > 69 && prevision.weather < 100 ) && <img src={rainy} alt='' /> }
                                { (prevision.weather > 200 && prevision.weather < 222 ) && <img src={rainy} alt='' /> }
                                { prevision.weather > 222 && <img src={rainy} alt='' /> }
                                
                                
                            </div>
                    
                        </div>
                    

                })

                
            }

                <div className="Prevision2" style={{ display: 'flex', alignItems: 'center'/*, border: 'solid red'*/}}><p style={{ fontStyle: 'italic', width: '80%', margin: '0 auto'}}>J+7...13</p></div>

            </div>


        )
    }
    
}



export default ListePrevisions ;