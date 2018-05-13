import React, { Component } from 'react';
import './App.css';
import HeroImageText from './components/hero-image-text/hero-image-text';
import ImageTextDesc from './components/image-text-desc/image-text-desc';
import DownloadLinks  from './components/download-links/download-links';
import IcoSummary from './components/ico-summary/ico-summary';
import IcoDistribution from './components/ico-distribution/ico-distribution';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroImageText/>
        <ImageTextDesc/>
        <DownloadLinks/>
        <IcoSummary/>
        <IcoDistribution/>
      </div>
    );
  }
}

export default App;
