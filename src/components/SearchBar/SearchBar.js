import 'date-fns';
import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import SearchIcon from '@material-ui/icons/Search';
import { CenterFocusStrong } from '@material-ui/icons';
import logo1 from './logo1.png';
import phrase1 from './phrase1.png';
import phrase3 from './phrase3.png';
import bonsplans from './bonsplans.png';
import { Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from "date-fns/locale/fr";


const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        marginLeft: "30%",
        left: '10px',



        backgroundColor: '#FFF',


    },
    selectEmpty: {
      marginTop: theme.spacing(2),

    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
        flexGrow: 1,
        marginRight: '2.5rem', 
        display: 'inline-block', 
        padding: '0.9rem'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    datepickers: {
        backgroundColor: 'white', 
        marginBottom: '0', 
        borderRadius: '3px' , 
    }, 
    recherche: {
        marginLeft: '0',
        [theme.breakpoints.up("md")]: {
            marginTop: '50px'
          }
    },

  });

  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiInputLabel-formControl': {
        left: '5px', 
        },
        '.MuiInputBase-input': {
        paddingLeft: '11px', 
        },
        '.MuiOutlinedInput-input': {
            padding: '14.5px 14px', 
        }, 
    },
  })(() => null);
  

class SearchBar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            location: '',
            selectedDateDepart: new Date('2021-01-01T21:11:54'),
            selectedDateRetour: new Date('2021-01-01T21:11:54'),
        };
        
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        this.handleDateDepartChange = this.handleDateDepartChange.bind(this);
        this.handleDateRetourChange = this.handleDateRetourChange.bind(this);

    }


    handleDateDepartChange(date) {
      
        this.setState({
            selectedDateDepart: date
        })
        
    }

    handleDateRetourChange(date) {
      
        this.setState({
            selectedDateRetour: date
        })
        
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        })

    }

    toggleSwitch(event) {

        this.props.triMeteo(event.target.checked)
        
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.location);
        event.preventDefault();
    }


    refreshPage() {
        window.location.reload();
     }



    render() {

        const { classes } = this.props;

        return(

            <div className="SearchBar">
                <Grid container className="SearchBar22" justify="center">
                    <GlobalCss />
                    <Grid  container item xs={8} lg={6} alignItems="center" className="champs">
                        <Grid item xs={10} sm={6} md={5} lg={4} className="departement" >
                        

                            <FormControl variant="outlined" style={{ width: '100%'}}>

                                <InputLabel id="demo-simple-select-outlined-label"  style={{ color: "black"}}>Département</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.value}
                                onChange={this.handleLocationChange}
                                label="Département"
                                >
                                
                                <MenuItem value="Savoie">Savoie</MenuItem>
                                <MenuItem value="Isère">Isère</MenuItem>
                                <MenuItem value="Hautes-Alpes">Hautes-Alpes</MenuItem>
                                <MenuItem value="Haute-Savoie">Haute-Savoie</MenuItem>
                                
                                <MenuItem value="Alpes-Maritimes">Alpes-Maritimes</MenuItem>
                                
                                </Select>
                                
                            </FormControl>
                        
                        </Grid>

                        <Grid item xs={10} sm={6} md={5} lg={3} className="personnes" >
                    

                            <FormControl variant="outlined" style={{ width: '100%'}}>
                                <InputLabel id="demo-simple-select-outlined-label" style={{ color: "black"}}>Nbre de personnes</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="NbrePersonnes"
                                >
                                <MenuItem value={1}>1 personne</MenuItem>
                                <MenuItem value={2}>2 personnes</MenuItem>
                                <MenuItem value={3}>3 personnes</MenuItem>
                                <MenuItem value={4}>4 personnes</MenuItem>
                                <MenuItem value={5}>5 personnes</MenuItem>
                                <MenuItem value={6}>6 personnes</MenuItem>
                                <MenuItem value={7}>7 personnes</MenuItem>
                                <MenuItem value={8}>8 personnes</MenuItem>
                                <MenuItem value={9}>9 personnes</MenuItem>
                                <MenuItem value={10}>10 personnes ou + </MenuItem>
                                </Select>

                                
                            </FormControl>

                
                        </Grid>

                        
                        <Grid container xs={10} sm={6} md={4} lg={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>

                                <KeyboardDatePicker
                                    autoOk 
                                    variant="inline" 
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    className={classes.datepickers} 
                                    label="Départ"
                                    value={this.state.selectedDateDepart}
                                    onChange={this.handleDateDepartChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDatePicker
                                    autoOk  
                                    variant="inline" 
                                    inputVariant="outlined" 
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    className={classes.datepickers} 
                                    label="Retour"
                                    value={this.state.selectedDateRetour}
                                    onChange={this.handleDateRetourChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                        
                        </Grid>
                                
                    </Grid>

                    <Grid container item xs={8} md={2}>

                    <div className={classes.root}>
      
                        <Button variant="contained" className={classes.recherche} startIcon={<SearchIcon style={{ fontSize: 30 }} />} onClick={ this.state.location !== '' ? this.handleSearch : null }>
                        Rechercher
                        </Button>

                    </div>

         
                    </Grid>

                <a href="#" onClick={this.refreshPage}><img src={logo1} className="logo1" alt="logo"/></a>
                <img src={phrase1} className="phrase1" alt="phrase1" />
                <img src={phrase3} className="phrase3" alt="phrase3" />
                <img src={bonsplans} className="bonsplans" alt="bonsplans" />


                </Grid>
            
            </div>


        )
        
    }


}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchBar);
