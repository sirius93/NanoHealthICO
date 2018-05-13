import React, { Component } from 'react';
import './contact-us.css';
import TelegramButton  from '../telegram-button/telegram-button';
import EmailSubscriptioForm from '../email-subscription-form/email-subscription-form';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';


class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="contact-us-container">
                <h4 className="contact-heading">Stay In Touch</h4>
                <p className="contact-sub-heading">Be the first to hear of new developments</p>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="telegram-content">
                      <TelegramButton/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                  <div className="email-content">
                    <EmailSubscriptioForm/>
                  </div>  
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                  <div className="social-share-links">
                    <span className="social-share-link">
                      <a href="www.instagram.com"><img src={instagram} alt="instagram"/></a>
                    </span>
                    <span className="social-share-link">
                      <a href="www.google.com"><img src={google} alt="google"/></a>
                    </span>
                    <span className="social-share-link">
                      <a href="www.facebook.com"><img src={facebook} alt="facebook"/></a>
                    </span>
                    <span className="social-share-link">
                      <a href="www.twitter.com"><img src={twitter} alt="twitter"/></a>
                    </span>
                  </div>
                  <p className="copyright-text">© 2018 NanoHealth. All Rights Reserved.</p>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default ContactUs;
