import React from 'react';
import './App.css';
import ListeHotels from '../ListeHotels/ListeHotels';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utilities/Yelp';
import Box from '@material-ui/core/Box';
import Footer from '../Footer/Footer';
import BottomPage from '../BottomPage/BottomPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hotels: [],
      tri: false
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.handleTriChange = this.handleTriChange.bind(this);

  }

  searchYelp(location) {
    Yelp.search(location).then( businesses => {
      this.setState({
        hotels: businesses 
    })
    });

  }

  handleTriChange(checked) {
    this.setState({ tri: checked });
  }





  render() {
  return (
    <Box className="App">
      <h1><a href="#" onClick={() => window.location.reload()}><span>Ski, Snow &amp; Sun </span></a> vous aide à choisir les stations de ski bénéficiant des meilleures conditions météo</h1>
      <SearchBar searchYelp={this.searchYelp} triMeteo={this.handleTriChange} />
      <ListeHotels hotels={this.state.hotels} tri={this.state.tri} />
      <BottomPage />
      <Footer />
    </Box>
  );
  }
}

export default App;
