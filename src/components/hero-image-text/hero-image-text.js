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
                <h1 className="Hero-image-text-header">Transforming Global Health and Wellness using blockchain</h1>
                <p className="Hero-image-text-subtext">NHCT makes it very easy and rewarding, to stay Healthy and Fit</p>
              </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <TelegramButton isNormalButton ={false} isTeleButton ={true} />
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
