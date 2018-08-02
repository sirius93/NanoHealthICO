import React, { Component } from 'react';
import './ico-summary.css';
import UseofProceeds from '../../assets/images/group-20.png';
import icosummary from '../../assets/images/ico-summary.png';
import icosummary2x from '../../assets/images/ico-summary@2x.png';

class IcoSummary extends Component {
  render() {
    return (
      <div className="ico-summary" id="ico-summary">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/*<div className="ico-summary-container">
                <div className="col-xs-12 ico-summary-heading">
                    <h4>ICO Summary</h4>
                    <p></p>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 ico-summary-token-name">
                  <h4> ERC 20 token</h4>
                    <p>(NHCT) NanoHealthCare Token</p>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 ico-summary-token-count">
                  <h4>$9 million</h4>
                  <p>Hard Cap</p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 ico-summary-token-count">
                  <h4>$1 million</h4>
                  <p>Soft Cap</p>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 ico-summary-token-circulation">
                  <h4>1,000,000,000</h4>
                  <p>No of Token in circulation</p>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 ico-summary-token-price">
                  <h4>$0.032</h4>
                  <p>BASE PRICE</p>
                </div>
              </div>*/}

              <div className="ico-summary-container">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <h4 className="ico-summary-sub-header">ICO Summary</h4>
                  <div className="ico-summary-diagram-image">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' }  />
                      <img width="85%" className="poh-image" src={icosummary} alt="image2"/>
                    </picture>
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

export default IcoSummary;
