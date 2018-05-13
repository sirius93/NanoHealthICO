import React, { Component } from 'react';
import './download-links.css';
import WhitePaper from '../../assets/images/whitepaper.svg';
import Deck from '../../assets/images/deck.svg';
import LitePaper from '../../assets/images/litepaper.svg'

class DownloadLinks extends Component {
  render() {
    return (
      <div className="download-link-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="download-links-container">
                <div className="col-xs-12 donwload-links-heading">
                    Learn more about us
                </div>
                <div className="col-xs-3">
                  <img className="donwload-link-image" src={WhitePaper} /><a href="#" className="donwload-link-anchor" title="White Paper">download <span class="glyphicon glyphicon-arrow-down"></span></a>
                </div>
                <div className="col-xs-3">
                  <img className="donwload-link-image" src={Deck} /><a href="#" className="donwload-link-anchor" title="Investor Deck">download <span class="glyphicon glyphicon-arrow-down"></span></a>
                </div>
                <div className="col-xs-3">
                  <img className="donwload-link-image" src={LitePaper} /><a href="#" className="donwload-link-anchor" title="Light Paper">download <span class="glyphicon glyphicon-arrow-down"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadLinks;
