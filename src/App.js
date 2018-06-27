import React, { Component } from 'react';
import './App.css';
import HeroImageText from './components/hero-image-text/hero-image-text';
import ImageTextDesc from './components/image-text-desc/image-text-desc';
import DownloadLinks  from './components/download-links/download-links';
import IcoSummary from './components/ico-summary/ico-summary';
import IcoDistribution from './components/ico-distribution/ico-distribution';
import ImageCard from './components/image-card/image-card';
import RoadMap from './components/roadmap/roadmap';
import OurTeam from './components/our-team/our-team';
import ContactUs from './components/contact-us/contact-us';
import OurPartners from './components/our-partners/our-partners';
import TelegramButton from './components/telegram-button/telegram-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroImageText/>
        <ImageTextDesc/>
        <DownloadLinks/>
        <OurPartners/>
        <IcoSummary/>
        <IcoDistribution/>
        <ImageCard/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 nomral-button-container">
              <TelegramButton isNormalButton ={true} isTeleButton ={false} /> 
            </div>
          </div>
        </div>
        <RoadMap/>
        <OurTeam/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;
