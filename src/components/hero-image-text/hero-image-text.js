import React, { Component } from 'react';
import './hero-image-text.css';
import { Navbar } from 'react-bootstrap';
import TelegramButton  from '../telegram-button/telegram-button';
import EmailSubscriptioForm from '../email-subscription-form/email-subscription-form';

class HeroImageText extends Component {
  render() {
    return (
      <div className="Hero-image-text">
        <div className="container">
          <div className="row">
              <div className="col-xs-12">
                <a href="/" className="Hero-image-text-logo"></a>
                <a href="/" className="Hero-image-text-investor">PRIVATE INVESTORS</a>
                <h1 className="Hero-image-text-header">Creating a decentralized health and wellness ecosystem</h1>
                <p className="Hero-image-text-subtext">NanoHealthCare Token (NHCT) ecosystem makes it really easy and rewarding for an individual to stay healthy and fit.</p>
              </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <TelegramButton isNormalButton ={false} isTeleButton ={false} isSocialMediaButtons = {true} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <EmailSubscriptioForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImageText;
