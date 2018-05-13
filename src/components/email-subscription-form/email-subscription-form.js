import React, { Component } from 'react';
import './email-subscription-form.css';

class EmailSubscriptioForm extends Component {
  render() {
    return (
      <div className="email-subscription-form">
        <form class="email-subscription-form-wrapper cf">
          <input type="email" placeholder="Enter your email to stay in loop" required />
          <button type="submit"><span class="glyphicon glyphicon-arrow-right"></span></button>
        </form>
      </div>
    );
  }
}

export default EmailSubscriptioForm;
