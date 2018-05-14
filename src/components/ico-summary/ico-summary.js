import React, { Component } from 'react';
import './ico-summary.css';
import UseofProceeds from '../../assets/images/group-20.png';
class IcoSummary extends Component {
  render() {
    return (
      <div className="ico-summary">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="ico-summary-container">
                <div className="col-xs-12 ico-summary-heading">
                    <h4>ICO Summary</h4>
                    <p></p>
                </div>
                <div className="col-xs-12 ico-summary-token-name">
                  <h4> ERC 20 token</h4>
                    <p>(NHCT) - Nano Health Care Token</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 ico-summary-token-count">
                  <h4>$9 million</h4>
                  <p>Hard Cap</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 ico-summary-token-count">
                  <h4>$1.5 million</h4>
                  <p>Soft Cap</p>
                </div>
                <div className="col-xs-12 ico-summary-token-circulation">
                  <h4>1,000,000,000</h4>
                  <p>No of Token in circulation</p>
                </div>
                <div className="col-xs-12 ico-summary-token-price">
                  <h4>$0.032</h4>
                  <p>BASE PRICE</p>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

export default IcoSummary;
