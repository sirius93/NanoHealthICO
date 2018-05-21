import React, { Component } from 'react';
import './telegram-button.css';

class TelegramButton extends Component { 
  constructor(props) {
    super(props);
    const isTeleButton = props.isTeleButton;
    const isNormalButton = props.isNormalButton;
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
        <a className="Normal-button-link" target="_blank" href="http://nanohealth.in">EXPLORE NANO HEALTH</a>
      </div>
    ) : null

    return (
      <div>
        {TeleButton}
        {NormalButton}
      </div>
    );
  }
}

export default TelegramButton;
