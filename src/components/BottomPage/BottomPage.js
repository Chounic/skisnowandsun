import React from 'react';
import './BottomPage.css';
import carteFrance from '../../images/BottomPage/carteFrance.png';


class BottomPage extends React.Component {

    render() {

        return (

            
            <div className="BottomPage">

                
                <h2>Partez au bon endroit, au bon moment</h2>

                <div className="carte">
                
                    <div>
                        
                        <img src={carteFrance} className="carteFrance" alt="carteFrance" />
                        
                    </div>

                    <div className="texteCarte">

                        <p>Trouvez une location à la montagne et partez dans les Alpes, les Pyrénées ou les Vosges. En résidence-vacances, en chalet ou en Appart'Hôtel, en ville ou dans un village accroché au flanc d'une vallée sauvage et préservée, pour un week-end ou un séjour prolongé, <span>Ski, Snow &amp; Sun </span>  vous propose de mettre toutes les chances de votre côté pour profiter d'un cadre dans des conditions optimales.<br/><br/>
                        Vous pouvez ainsi rechercher des locations dans des stations de ski où l'enneigement et l'ensoleillement vous permettront d'apprécier votre séjour, que vous soyez férus de ski ou voulant simplement bénéficier d'un moment de détente.<br/><br/>
                        Réservez la location de vos rêves à la montagne et passez des vacances enchanteresses dans un décor majestueux, entre alpages et forêts de sapins. Vous trouverez facilement l'hébergement de vos rêves et pourrez opter au choix pour une location au pied des pistes, permettant de sortir skis aux pieds, ou privilégier une résidence-vacances ou un chalet plus à l'écart et au calme pour des vacances reposantes.</p>

                    </div>

                </div>
                

            </div>

        )
    }





}

export default BottomPage ;