import React, { Component } from 'react';
import './telegram-button.css';
import medium from '../../assets/images/medium.png';
import medium2x from '../../assets/images/medium@2x.png';
import telegram from '../../assets/images/telegram-copy.png';
import telegram2x from '../../assets/images/telegram-copy@2x.png';
import facebook from '../../assets/images/telegram-copy-2.png';
import facebook2x from '../../assets/images/telegram-copy-2@2x.png';
import twitter from '../../assets/images/telegram-copy-3.png';
import twitter2x from '../../assets/images/telegram-copy-3@2x.png';

class TelegramButton extends Component { 
  constructor(props) {
    super(props);
    const isTeleButton = props.isTeleButton;
    const isNormalButton = props.isNormalButton;
    const isSocialMediaButtons = props.isSocialMediaButtons;
    console.log(isTeleButton,isNormalButton,props);
  }

  render() {

    const TeleButton = this.props.isTeleButton ? (
      <div className="telegram-button">
        <a className="telegram-button-link" target="_blank" href="https://t.me/Nanohealth">Join Our Telegram Group <span class="glyphicon glyphicon-arrow-right"></span></a>
      </div>
    ) : null

    const NormalButton = this.props.isNormalButton ? (
      <div className="Normal-button">
        <a className="Normal-button-link" target="_blank" href="http://nanohealth.in">Explore NanoHealth</a>
      </div>
    ) : null

    const SocialMediaButtons = this.props.isSocialMediaButtons ? (
      <div className="social-media-buttons">
          <div className="social-share-links">
            <span className="social-share-link">
              <a href="https://t.me/Nanohealth" target="_blank">
              <picture>
                  <source media="(max-width: 767px)" srcset={ telegram + ' 1x' + ',' + telegram2x + ' 2x' } />
                  <source media="(max-width: 1025px)" srcset={ telegram + ' 1x' + ',' + telegram2x + ' 2x' } />
                  <source srcset={ telegram + ' 1x' + ',' + telegram2x + ' 2x' }  />
                  <img width="100%" src={telegram} alt="telegram" />
                </picture>
              </a>
            </span>
            <span className="social-share-link medium-logo">
              <a href="https://medium.com/nhct-nanohealth-care-token" target="_blank">
                <picture>
                  <source media="(max-width: 767px)" srcset={ medium + ' 1x' + ',' + medium2x + ' 2x' } />
                  <source media="(max-width: 1025px)" srcset={ medium + ' 1x' + ',' + medium2x + ' 2x' } />
                  <source srcset={ medium + ' 1x' + ',' + medium2x + ' 2x' }  />
                  <img width="100%" src={medium} alt="medium" />
                </picture>
              </a>
            </span>
            {/* <span className="social-share-link">
              <a href="www.google.com" target="_blank">
                <picture>
                  <source media="(max-width: 767px)" srcset={ facebook + ' 1x' + ',' + facebook2x + ' 2x' } />
                  <source media="(max-width: 1025px)" srcset={ facebook + ' 1x' + ',' + facebook2x + ' 2x' } />
                  <source srcset={ facebook + ' 1x' + ',' + facebook2x + ' 2x' }  />
                  <img width="100%" src={facebook} alt="facebook" />
                </picture>
              </a>
            </span> */}
            <span className="social-share-link">
              <a href="https://twitter.com/NHCToken" target="_blank">
              <picture>
                <source media="(max-width: 767px)" srcset={ twitter + ' 1x' + ',' + twitter2x + ' 2x' } />
                <source media="(max-width: 1025px)" srcset={ twitter + ' 1x' + ',' + twitter2x + ' 2x' } />
                <source srcset={ twitter + ' 1x' + ',' + twitter2x + ' 2x' }  />
                <img width="100%" src={twitter} alt="twitter" />
              </picture>
              </a>
            </span>
          </div>
      </div>
    ) : null

    return (
      <div>
        {TeleButton}
        {NormalButton}
        {SocialMediaButtons}
      </div>
    );
  }
}

export default TelegramButton;
