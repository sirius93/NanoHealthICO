import React, { Component } from 'react';
import './hero-image-text.css';
import { Navbar } from 'react-bootstrap';
import TelegramButton  from '../telegram-button/telegram-button';
import EmailSubscriptioForm from '../email-subscription-form/email-subscription-form';
import Particles from 'react-particles-js';
import {particle} from "../../APIS/particle-js";
import screen  from '../../assets/images/screen.png';
import Header from '../../assets/images/Header.png';
import Mr_total_health from '../../assets/images/Mr_total_health.png';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

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
              {/*<a href="/" className="Hero-image-text-logo"></a>
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
                </div>*/}

                <StickyHeader
                  
                  header={
                    <div className="Header_root">
                      
                      <a href="/" className="Hero-image-text-logo Header_title"></a>
                      <ul className="navbar-container Header_links">
                        <li className="Header_link"><a href="#download-link" className="Hero-image-text-navigator">WhitePaper</a></li>
                        <span class="pipe-style">&nbsp;|&nbsp;</span>
                        <li className="Header_link"><a href="#nhct-ecosystem" className="Hero-image-text-navigator">NHCT Ecosystem</a></li>
                        <span class="pipe-style">&nbsp;|&nbsp;</span>
                        <li className="Header_link"><a href="#ico-summary" className="Hero-image-text-navigator">ICO Summary</a></li>
                        <span class="pipe-style">&nbsp;|&nbsp;</span>
                        <li className="Header_link"><a href="#our-team" className="Hero-image-text-navigator">Our Team</a></li>
                        <span class="pipe-style">&nbsp;|&nbsp;</span>
                        <li className="Header_link"><a target="_blank" href="https://medium.com/nhct-nanohealth-care-token" className="Hero-image-text-navigator">Blog</a></li>
                      </ul>
                    </div>
                  }

                />
              <div className="col-xs-12 col-sm-6 col-md-6">  
                {/*<h1 className="Hero-image-text-header">Creating a decentralized health and wellness ecosystem</h1>*/}
                <h1 className="Hero-image-text-header">Creating a blockchain powered ecosystem of <span>Total Health</span></h1>
                <p className="Hero-image-text-subtext">NanoHealthCare Token (NHCT) ecosystem makes it really easy and rewarding for an individual to stay healthy and fit.</p>
                <div className="social-media-buttons">
                  <TelegramButton isNormalButton ={false} isTeleButton ={false} isSocialMediaButtons = {true} />
                </div>
                <a href="mailto:ico@nanohealth.in?»&subject=Interested In Private Investment" class="Hero-image-text-investor">Interested in Private Sale <span class="glyphicon glyphicon-arrow-right"></span></a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 hidden-xs"> 
                <img className="screen-image" width="80%" src={Mr_total_health} alt="Learn" />
              </div>
            </div>
          </div>
        
          
        </div>
      </div>
    );
  }
}

export default HeroImageText;
