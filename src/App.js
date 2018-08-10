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
import IcoValuesTabs from './components/ico-values-tabs/ico-values-tabs';
import ProofOfHealth from './components/proof-of-health/proof-of-health';
import Testimonials from './components/Testimonials/testimonials';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroImageText/>
        <ImageTextDesc/>
        {/*<DownloadLinks/>*/}
        <ImageCard/>
        <IcoValuesTabs/>
        <ProofOfHealth/> 
        <IcoSummary/>
        {/*<IcoDistribution/> */}
        <RoadMap/>
        <OurTeam/>
        <Testimonials/>
        <OurPartners/>      
        
        
        <ContactUs/>
        <div className="sticky-telegram"><a href="https://t.me/NanoHealth" className="sticky-telegram-icon" target="_blank">Telegram</a></div>
      </div>
    );
  }
}

export default App;
