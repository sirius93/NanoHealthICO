import React, { Component } from 'react';
import './ico-distribution.css';
import UseofProceeds from '../../assets/images/group-20.png';
import NHTTokendis from '../../assets/images/group_20.png';
import Wawa from '../../assets/images/group-21.png';
import Warma from '../../assets/images/group-21-copy.png';


class IcoDistribution extends Component {
  render() {
    return (
      <div className="ico-distribution"> 
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="ico-distribution-left-image">
                <div className="row">
                  <div className="col-xs-6 ico-distribution-image">
                    <img src={UseofProceeds} alt="Use of Proceeds"/>
                  </div>
                  <div className="col-xs-6 ico-distribution-text">
                    <p className="tech">Tech Dev and Deploy</p>
                    <h5 className="tech-per">55%</h5>
                    <p className="biz">Sales, Biz Dev and Mktg</p>
                    <h5 className="biz-per">20%</h5>
                    <p className="market">Market expansion</p>
                    <h5 className="market-per">20%</h5>
                    <p className="legal">Legal and Consulting</p>
                    <h5 className="legal-per">20%</h5>
                  </div>
                </div>
              </div>
              <div className="ico-distribution-right-image">
                <div className="row">
                <div className="col-xs-6 ico-distribution-text">
                    <p className="tech">Crowd Sale</p>
                    <h5 className="tech-per">35%</h5>
                    <p className="biz">User rewards</p>
                    <h5 className="biz-per">30%</h5>
                    <p className="market">ICO core team</p>
                    <h5 className="market-per">15%</h5>
                    <p className="legal">Ecosystem development</p>
                    <h5 className="legal-per">18%</h5>
                    <p className="legal">BOUNTY TOKENS</p>
                    <h5 className="legal-per">2%</h5>
                  </div>
                  <div className="col-xs-6 ico-distribution-image">
                    <img src={NHTTokendis} alt="NHT token distribution"/>
                  </div>
                </div>
              </div> 
              <div className="ico-distribution-double">
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="ico-distribution-double-container">
                    <div className="row">
                      <div className="col-xs-4">
                        <img width="100%" src={Wawa} alt="wawa"/>
                      </div>
                      <div className="col-xs-4 ico-distribution-double-text">
                        <p className="ico-distribution-double-text-1">Ecosystem development</p>
                        <p className="ico-distribution-double-text-2"> User rewards </p>
                      </div>
                      <div className="col-xs-4">
                      <img width="100%" src={Warma} alt="wawa"/>
                      </div>
                    </div>
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

export default IcoDistribution;
