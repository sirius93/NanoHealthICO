import React, { Component } from 'react';
import './email-subscription-form.css';

import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import {Token_ICO_BASE_API} from "../../APIS/BaseAPIS";

const EMAIL_SUBSCRIPTION_API = Token_ICO_BASE_API+"subscribe";

class EmailSubscriptioForm extends Component {

  constructor() {
    super();
    this.state = {
      email : '',
      errorMessage : false,
      successMessage : false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({email : event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ errorMessage : false});
    this.setState({ successMessage : false});
    
    axios.post(EMAIL_SUBSCRIPTION_API, { email: this.state.email })
    .then( 
        (response) => {  
          debugger
          this.setState({successMessage : true});
          this.setState({email : ""});
          console.log(this.state.successMessage);
        },
        (error) => { 
            if (error.response.status === 422) {
                this.setState({email : ""});
                this.setState({ errorMessage : true});

            }
        }
      );

  }

  render() {

    const {handleSubmit} = this.props;
    const successStyle = {
      textAlign: 'center',
      color: 'white',
      padding: '20px',
      fontFamily: 'Din Next Medium',
      fontSize: '2rem'
    };

    const successMessage = this.state.successMessage ? (
      <p style={successStyle}>Thanks for your Subscription!</p>
    ) : null
    const errorMessage = this.state.errorMessage ? (
      <p style={successStyle}>You're Already Subscribed!</p>
    ) : null

    return (
      <div className="email-subscription-form">
          <form class="email-subscription-form-wrapper cf" onSubmit={this.handleSubmit} id="email-subscription-form">
            <input type="email" placeholder="Enter your email to stay in loop" required onChange={this.handleChange} id="email-subscription-field" value={this.state.email}/>
            <button type="submit"><span class="glyphicon glyphicon-arrow-right"></span></button>
          </form>
          {successMessage}
          {errorMessage}
      </div>
    );
  }
}

export default EmailSubscriptioForm;
