import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo1 from '../SearchBar/logo1.png';



class Footer extends React.Component {

    render() {

        return (

            <div className="footer" >

                <div className="reseaux">

                    <span >Suivez-nous</span>
                    <FacebookIcon className="icones" fontSize="large"/>
                    <TwitterIcon className="icones" fontSize="large"/>
                    <InstagramIcon className="icones" fontSize="large"/>
                    <YouTubeIcon className="icones" fontSize="large"/>
                    <LinkedInIcon className="icones" fontSize="large"/>

                </div>


                <div className="apropos">

                    <div className="itemFooter">

                        <h2>A propos</h2>
                        <p>Actualités Coronavirus</p>
                        <p>Qui sommes-nous?</p>
                        <p>Nous contacter</p>
                        <p>FAQ</p>

                    </div>

                    <div className="">

                        <a href="#" onClick={() => window.location.reload()}><img src={logo1} className="logoFooter" alt="logoFooter"/></a>

                    </div>

                    <div className="itemFooter">

                        <p>Bons plans</p>
                        <p>Dernières minutes</p>
                        <p>Mentions légales</p>
                        <p>Politique de cookies</p>
                    </div>

                </div>




                <div className="copyright">

                <div className="">

                <a href="#" onClick={() => window.location.reload()}><img src={logo1} className="logoFooter2" alt="logoFooter"/></a>

                </div>

                    <p>Copyright &copy; 2020-2021 Skisnowandsun.fr. Tous droits réservés.</p>

                </div>

            </div>




        )
    }





}


export default Footer ;