import React from 'react';
import './Hotel.css';
import ListePrevisions from '../ListePrevisions/ListePrevisions'
import {codevilles} from '../../utilities/Codevilles';
import MeteoConcept from '../../utilities/MeteoConcept';
import badReview from './bad-review.png';
import skiing from './skiing.png';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SignalWifi1BarLock, SignalWifi1BarLockSharp } from '@material-ui/icons';
import placeholder from './placeholder.png';
import { deepOrange } from '@material-ui/core/colors';
import LinearProgress from '@material-ui/core/LinearProgress';


const DispoButton = withStyles({
    root: {
        backgroundColor: '#fff176',
        '&:hover': {
            backgroundColor: '#fffbdd'
            },
        color: '#41482A'
    }
})(Button);

const InfoButton = withStyles({
    root: {
        backgroundColor: 'rgb(0, 49, 109)',
        fontStyle: 'italic',
        fontSize: '0.1em',
        '&:hover': {
            backgroundColor: 'rgb(0, 49, 109)'
            }
    }
})(Button);

const styles = theme => ({
    button: {
      textTransform: 'none',
      fontSize: '.8rem',
      margin: '.2rem',
    },
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
        justifyContent: 'center'
    }, 
    loading: {
        width: '60%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
        marginTop: '6rem',
        margin: '0 auto'
      }
  });


class Hotel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            previsions: [], 
            loading: true
        };

        this.loadingPrevisions = this.loadingPrevisions.bind(this);

    }

    

    componentDidMount() {


        const town = codevilles.filter( codeville => codeville.ville === this.props.ville );

        const codeville = town[0].insee ;

        MeteoConcept.meteo(codeville).then( forecast => {

            this.setState({
                previsions: forecast,
                loading: false,
            })

        }
        );

    }

    loadingPrevisions() {

        this.setState({

            loading: false,

        })
    }


    render(){

        const { hotel } = this.props;
        hotel.score = 0;
        const { classes } = this.props;


        if (this.state.loading){

            return ( 
              <div className={classes.loading}>
              <LinearProgress />
              </div>
                  )
          } else {
              
        return(

            <div className="Hotel">
                
                <div className="Hotel-name">
                    <h2>{hotel.name}</h2>
                    <h3 className="rating">{hotel.rating} stars</h3>
                    { hotel.price && <h3 className="price">tarif {hotel.price} </h3>}
                </div>
                <div className="Hotel-description">
                    <div className="image-container">
                        <img src={hotel.imageSrc ? hotel.imageSrc : placeholder } alt=''/>
                        <div className="Hotel-reviews">
                            <h2>{hotel.reviewCount} avis</h2>
                            <p>Annulation gratuite jusqu'à J-2</p>
                        </div>

                    </div>
                    
                    <div className="Hotel-infos">
                        <div className="Hotel-information">
                            <div className="Hotel-address">

                                <h2>{hotel.city}</h2>
                                <p>{hotel.address} {hotel.zipCode} {hotel.city}</p>
                                { hotel.phone && <p>Tel : {hotel.phone}</p> }
                            
                            </div>
                            <div className="Hotel-reviews">
                                <h2>{hotel.reviewCount} avis</h2>
                                <p>Annulation gratuite jusqu'à J-2</p>
                            </div>
                        </div>
                        <div className="separateur" ></div>
                        <div className="Hotel-forecast">

                            <div className="forecastGroup">

                                <div className="Hotel-weatherScore">
                                
                                                        

                                    <h2>Prévisions Météo</h2>

                                    <div >

                                        {
                                            
                                            this.state.previsions.filter( prevision => prevision.day < 7 ).forEach( prevision => {

                                                if (prevision.weather === 0) {
                                                    hotel.score += 5; // soleil
                                                } else if (prevision.weather === 1){
                                                    hotel.score += 4; // Peu nuageux
                                                } else if (prevision.weather > 1 && prevision.weather < 4){
                                                    hotel.score += 3; // Ciel voilé , Nuageux
                                                } else if (prevision.weather > 3 && prevision.weather < 6){
                                                    hotel.score += 2; // Très nuageux, Couvert
                                                } else if (prevision.weather > 15 && prevision.weather < 22){
                                                    hotel.score += 1; // neige, faible moyen
                                                } else if (prevision.weather === 60 || prevision.weather === 61 || prevision.weather === 63 || prevision.weather === 64 || prevision.weather === 66 || prevision.weather === 67 ){
                                                    hotel.score += 1; // neige, faible moyen
                                                } 


                                                })
                                        
                                        }

                                        { hotel.score <= 8 && <span>Mauvaises</span> }
                                        { hotel.score <= 8 && <img src={badReview} alt="" /> }

                                        { (hotel.score > 8 && hotel.score < 20) && <span>Moyennes</span> }
                                        { (hotel.score > 8 && hotel.score < 20) && <img src={skiing} alt="" /> }

                                        { (hotel.score > 19 && hotel.score < 28) && <span>Bonnes</span> }
                                        { (hotel.score > 19 && hotel.score < 28) && <img src={skiing} alt="" /> }
                                        { (hotel.score > 19 && hotel.score < 28) && <img src={skiing} alt="" /> }

                                        { hotel.score > 27 && <span>Excellentes</span> }
                                        { hotel.score > 27 && <img src={skiing} alt="" /> }
                                        { hotel.score > 27 && <img src={skiing} alt="" /> }
                                    { hotel.score > 27 && <img src={skiing} alt="" /> }

                                        
                                    </div>

                                </div>

                        
                                
                                {<ListePrevisions previsions={this.state.previsions} loading={this.loadingPrevisions} />}

                            </div>

                            <div className="Hotel-resa">

                                <InfoButton
                                    variant="contained"
                                    color="secondary"
                                    disableRipple 
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Plus d'infos
                                </InfoButton>

                                <DispoButton
                                    variant="contained"
                                    color="primary"
                                    disableRipple 
                                    className={classes.button}
                                >
                                    disponibilités et réservations
                                </DispoButton>


                            </div>

                        </div>
                    </div>


                </div>
    
            </div>
            
            )
        }
    }


}

Hotel.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Hotel);
