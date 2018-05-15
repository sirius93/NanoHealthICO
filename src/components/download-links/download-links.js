import React, { Component } from 'react';
import './download-links.css';
import WhitePaper from '../../assets/images/whitepaper.png';
import Deck from '../../assets/images/deck.png';
import LitePaper from '../../assets/images/litepaper.png'

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
                  <img className="donwload-link-image" src={Deck} /><a href="https://docsend.com/view/5sikgjv" className="donwload-link-anchor" title="Investor Deck" target="_blank">download <span class="glyphicon glyphicon-arrow-down"></span></a>
                </div>
                <div className="col-xs-3">
                  <img className="donwload-link-image" src={WhitePaper} /><a href="javascript:void(0)" className="donwload-link-anchor" title="White Paper">Coming Soon <span class="glyphicon glyphicon-arrow-down"></span></a>
                </div>
                <div className="col-xs-3">
                  <img className="donwload-link-image" src={LitePaper} /><a href="javascript:void(0)" className="donwload-link-anchor" title="Light Paper">Coming soon <span class="glyphicon glyphicon-arrow-down"></span></a>
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
