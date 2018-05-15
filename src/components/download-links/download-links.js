import React, { Component } from 'react';
import './download-links.css';
import WhitePaper from '../../assets/images/whitepaper.png';
import WhitePaper2x from '../../assets/images/whitepaper@2x.png';
import Deck from '../../assets/images/deck.png';
import Deck2x from '../../assets/images/deck@2x.png';
import LitePaper from '../../assets/images/litepaper.png'
import LitePaper2x from '../../assets/images/litepaper@2x.png'

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
                <div className="col-xs-12 col-sm-4 col-md-3">
                  <div className="donwload-link-image-container">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ Deck + ' 1x' + ',' + Deck2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ Deck + ' 1x' + ',' + Deck2x + ' 2x' } />
                      <source srcset={ Deck + ' 1x' + ',' + Deck2x + ' 2x' }  />
                      <img className="donwload-link-image" src={Deck} alt="Learn" />
                    </picture>
                    <a href="https://docsend.com/view/5sikgjv" target="_blank" className="donwload-link-anchor" title="Investor Deck">download <span class="glyphicon glyphicon-arrow-down"></span></a>                    
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-3">
                  <div className="donwload-link-image-container">
                  <picture>
                      <source media="(max-width: 767px)" srcset={ WhitePaper + ' 1x' + ',' + WhitePaper2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ WhitePaper + ' 1x' + ',' + WhitePaper2x + ' 2x' } />
                      <source srcset={ WhitePaper + ' 1x' + ',' + WhitePaper2x + ' 2x' }  />
                      <img className="donwload-link-image" src={WhitePaper} alt="Learn" />
                    </picture>
                    <a href="javascript:void(0)" target="_blank" className="donwload-link-anchor" title="White Paper">Coming Soon <span class="glyphicon glyphicon-arrow-down"></span></a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-3">
                  <div className="donwload-link-image-container">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ LitePaper + ' 1x' + ',' + LitePaper2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ LitePaper + ' 1x' + ',' + LitePaper2x + ' 2x' } />
                      <source srcset={ LitePaper + ' 1x' + ',' + LitePaper2x + ' 2x' }  />
                      <img className="donwload-link-image" src={LitePaper} alt="Learn" />
                    </picture><a href="javascript:void(0)" target="_blank" className="donwload-link-anchor" title="Light Paper">Coming soon <span class="glyphicon glyphicon-arrow-down"></span></a>
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

export default DownloadLinks;
