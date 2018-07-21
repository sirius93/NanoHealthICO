import React, { Component } from 'react';
import './hero-image-text.css';
import { Navbar } from 'react-bootstrap';
import TelegramButton  from '../telegram-button/telegram-button';
import EmailSubscriptioForm from '../email-subscription-form/email-subscription-form';
import Particles from 'react-particles-js';
import {particle} from "../../APIS/particle-js";
import screen  from '../../assets/images/screen.png';

class HeroImageText extends Component {
  render() {
    return (
      <div className="Hero-image-text">
        <div className="particle-js">
          <Particles
            params={
                particle
              }
            style={{
              width: '100%'
            }}  
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <a href="/" className="Hero-image-text-logo"></a>
                <div className="navbar-container">
                  <a href="#download-link" className="Hero-image-text-navigator">WhitePaper</a>
                  <span class="pipe-style">&nbsp;|&nbsp;</span>
                  <a href="#nhct-ecosystem" className="Hero-image-text-navigator">NHCT Ecosystem</a>
                  <span class="pipe-style">&nbsp;|&nbsp;</span>
                  <a href="#ico-summary" className="Hero-image-text-navigator">ICO Summary</a>
                  <span class="pipe-style">&nbsp;|&nbsp;</span>
                  <a href="#our-team" className="Hero-image-text-navigator">Our Team</a>
                  <span class="pipe-style">&nbsp;|&nbsp;</span>
                  <a target="_blank" href="https://medium.com/nhct-nanohealth-care-token" className="Hero-image-text-navigator">Blog</a>
                </div>
              <div className="col-xs-12 col-sm-6 col-md-8">  
                <h1 className="Hero-image-text-header">Creating a decentralized health and wellness ecosystem</h1>
                <p className="Hero-image-text-subtext">NanoHealthCare Token (NHCT) ecosystem makes it really easy and rewarding for an individual to stay healthy and fit.</p>
                <div className="social-media-buttons">
                  <TelegramButton isNormalButton ={false} isTeleButton ={false} isSocialMediaButtons = {true} />
                </div>
                <a href="mailto:ico@nanohealth.in?»&subject=Interested In Private Investment" class="Hero-image-text-investor">Interested in private Sale <span class="glyphicon glyphicon-arrow-right"></span></a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 hidden-xs"> 
                <img className="screen-image" width="100%" src={screen} alt="Learn" />
              </div>
            </div>
          </div>
        
          
        </div>
      </div>
    );
  }
}

export default HeroImageText;
