import React from 'react';
import './ListeHotels.css';
import Hotel from '../Hotel/Hotel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';


//const listeStations = ['Courchevel', 'Meribel', 'Risoul', 'Puy St Vincent', 'Serre Chevalier'];

const styles = theme => ({
    root: {
      width: '60%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      marginTop: '6rem',
      margin: '0 auto'
    }
});


class ListeHotels extends React.Component {

    constructor(props) {

      super(props);
      this.state = {
        newlist: [],
        tri: false,
        loading: true
      }

    }

    componentDidMount() {


      
      this.setState({
        loading: false,
      });


    }

    /*static getDerivedStateFromProps(props, state) {

      console.log(props.tri);

        if (props.hotel) {
          if (props.tri !== state.tri) {
            console.log('aloors');
            return {
              newlist: [].concat(props.hotels).sort((a, b) => b.score - a.score),
            }
          }
        }
    }*/



    render() {

      const { classes } = this.props;

      if (this.state.loading){
        
        return ( 
          <div className={classes.root}>
          <LinearProgress />
          </div>
              )
      } else {
        return (

            <div className="Resultat">


              { this.props.hotels[1] && 
              <div className="Banniere">

              </div>

              }
            
              <div className="ListeHotels">

                <Grid container item xs={12} style={{ marginBottom:'2rem', marginLeft: '5%' }}>

                
                
                { this.props.hotels[1] && 
                
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <p className="classer">Classer par </p> 
                                            <Button onClick={() => {
                let newList = [].concat(this.props.hotels).sort((a, b) => b.score - a.score);
                  console.log('meteo');
                this.setState({
                  newlist: newList ,
                  tri: true
                })

                
                }
                }>météo</Button>
                                            <Button onClick={() => {
                let newList = [].concat(this.props.hotels).sort((a, b) => b.rating - a.rating);
                  console.log('note');
                this.setState({
                  newlist: newList ,
                  tri: true
                })

                
                }
                }>note</Button>
                                            <Button onClick={() => {
                let newList = [].concat(this.props.hotels).sort((a, b) => b.reviewCount - a.reviewCount);
                  console.log('avis');
                this.setState({
                  newlist: newList ,
                  tri: true
                })

                
                }
                }>nombre d'avis</Button>
                                          </ButtonGroup>
                
                
                
                
                
                
                /* this.props.hotels[1] && <Button variant="contained" color="primary" onClick={() => {
                let newList = [].concat(this.props.hotels).sort((a, b) => b.score - a.score);
                  console.log(newList);
                this.setState({
                  newlist: newList ,
                  tri: !this.state.tri
                })

                
                }
                }>Trier</Button>*/}

                </Grid>

                
                {
                this.props.hotels.map( (hotel) => {

                  return !this.state.tri && <Hotel hotel={hotel} key={hotel.id} ville={hotel.city} />;
                  //}
                  
                })
                }
              
                {
                this.state.newlist.map( (hotel) => {

                  return this.state.tri && <Hotel hotel={hotel} key={hotel.id} ville={hotel.city} />;
                  
                })
                }


              </div>



            </div>
              )
          }

          }

}

ListeHotels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListeHotels);