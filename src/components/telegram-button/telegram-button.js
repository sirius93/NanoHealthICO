import React, { Component } from 'react';
import './telegram-button.css';

class TelegramButton extends Component {
  render() {
    return (
      <div className="telegram-button">
        <a className="telegram-button-link" target="_blank" href="https://t.me/Nanohealth">Join Our Telegram Group <span class="glyphicon glyphicon-arrow-right"></span></a>
      </div>
    );
  }
}

export default TelegramButton;
